DROP DATABASE IF EXISTS mgmtsystem_db;
CREATE DATABASE mgmtsystem_db;

USE mgmtsystem_db;

CREATE TABLE department(
    id INT NOT NULL,
    name VARCHAR(30),
  PRIMARY KEY (id),
);

CREATE TABLE role(
    id INT NOT NULL,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT,
  PRIMARY KEY (id),
);

CREATE TABLE employee(
    id INT NOT NULL,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT,
  PRIMARY KEY (id)
);