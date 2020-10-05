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
    // start();
    console.log("connection has begun")
  });