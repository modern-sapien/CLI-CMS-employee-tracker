const inquirer = require("inquirer");
const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    // Your port; if not 3306
    port: 3306,
    // Your username
    user: "root",
    // Your password
    password: "1087",
    database: "mgmtsystem_db"
  });

connection.connect(function(err) {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    start();
    console.log("connection has begun")
  });

// // ROLE ARRAY
updateRoles();

function updateRoles()  {
connection.query(`SELECT role.title FROM role;`, function (err,res) {
      if (err,res)  
        if (res.length > 0) {
          for (let i = 0; i < res.length; i++)  {
            const roleString = res[i].title
            roleArray.push(roleString);
      }
      }
    })
  };

const roleArray = [];

// EMPLOYEE ARRAY
updateEmployees()

function updateEmployees()  {
connection.query(`SELECT employee.first_name, employee.last_name, employee.role_id, role.title
  FROM employee
  INNER JOIN role
  ON employee.role_id = role.id;`, function (err,res) {
      if (err,res)  
        if (res.length > 0) {
          for (let i = 0; i < res.length; i++)  {
            const employeeString = res[i].first_name + " " + res[i].last_name           
            employeeArray.push(employeeString); 
          };
      }
      })
    }

const employeeArray = [];

  function start()  {
    inquirer
    .prompt({
      name: "selection",
      type: "list",
      message: "What would you like to do?",
      choices: ["View All", "Add New Employee", "Add New Department", "Add New Role", "Update Roles"]
    })
    .then(({selection}) => {      // used destructuring to access key
      // based on their answer, either call the bid or the post functions
      if (selection === "View All") {
        viewAll();
      } else if (selection === "Add New Employee") {
        newEmployee(); 
      }
      else if (selection === "Add New Department") {
        newDepartment();
      }
      else if (selection === "Add New Role") {
        newRole();
      }
      else if (selection === "Update Roles") {
        updateRole();
      }
  })
}

function updateRole()  {
  console.log(employeeArray)
  console.log(roleArray)
    inquirer.prompt([
      {
        name: "employeeUpdate",
        type: "list",
        message: "Please select the employee to update.",
        choices: employeeArray
      },
      {
        name: "roleUpdate",
        type: "list",
        message: "Please select the employee to update.",
        choices: roleArray
      }
    ]).then((res) => {
      console.log(res.employeeUpdate, res.roleUpdate);
      strArray = res.employeeUpdate.split(" ");
      firstName = strArray[0];
      lastName = strArray[1];
      console.log(firstName, lastName);
      const rolePosition = roleArray.indexOf(res.roleUpdate) + 1
      console.log(rolePosition)
      connection.query(`UPDATE employee SET ? WHERE ? AND ?`,
      [{
        role_id: rolePosition
      },
      {
        first_name: firstName
      },
      {
        last_name: lastName
      }],
      function (err, res)  {
      if(err) throw err;
      console.log(firstName + " " + lastName + ",  employee has been udpated! \n")
      start();  
    })
    })
  }

function viewAll(){
    connection.query(
        `SELECT employee.first_name, employee.last_name, role.title, role.salary
        FROM employee
        INNER JOIN role
            ON employee.role_id = role.id
        INNER JOIN department
            ON role.department_id = department.id;`,
         function (err, res) {
             if (err, res)
             console.table(res)
             start();
         })  
}
function newEmployee()  {
  inquirer.prompt([
    {
      name: "first",
      type: "input",
      message: "Please share the first name of new employee?"
    },
    {
        name: "last",
        type: "input",
        message: "Please share the last name of new employee?"
    },
    {
        name: "role",
        type: "list",
        choices: ["1", "2", "3"]
    },
    {
        name: "managerID",
        type: "list",
        choices: ["0", "1", "2", "3", "4"]
    },
    ]).then(({first, last, role, managerID}) => {
        console.log(first, last, role, managerID)
        connection.query("INSERT INTO employee SET ?", 
        {   
            first_name: first,
            last_name:  last,
            role_id: role,
            manager_id: managerID
        },
        function (err, res) {
            if (err, res)
            console.table(res)
            start();
         })
    })}

function newDepartment()  {
        inquirer.prompt(
        {
          name: "name",
          type: "input",
          message: "Please share the name of the new department?"
        }).then(({name}) => {
            console.log(name)
            connection.query("INSERT INTO department SET ?", 
            {   name: name
            },
            function (err, res) {
                if (err, res)
                console.table(res)
                start();
             })
        })
    }

function newRole()  {
            inquirer.prompt([
            {
            name: "title",
            type: "input",
            message: "Please share the name of the new role."
            },
            {
            name: "salary",
            type: "number",
            message: "Please share the starting salary of the new role."
            },
            {
            name: "departmentID",
            type: "number",
            message: "Please share the department ID number for the new role"
            }
        ]).then(({title, salary, departmentID}) => {
        connection.query("INSERT INTO role SET ?", 
                {   title: title,
                    salary: salary,
                    department_id: departmentID
                },
                function (err, res) {
                    if (err, res)
                    console.table(res)
                    start();
                 })
            })
        }
