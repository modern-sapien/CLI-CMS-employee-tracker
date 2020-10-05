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

  function start()  {
    inquirer
    .prompt({
      name: "selection",
      type: "list",
      message: "What would you like to do?",
      choices: ["View All", "Add New", "Update Roles"]
    })
    .then(({selection}) => {      // used destructuring to access key
      // based on their answer, either call the bid or the post functions
      if (selection === "View All") {
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
                connection.end()
            })
      }
  })
}