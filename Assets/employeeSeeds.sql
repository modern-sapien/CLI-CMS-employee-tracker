INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES (jessa, smith, 1, 0), (lane, tundra, 2, 1), (rogers, delante, 1, 0), (ella, fitzgerald, 1, 0);

INSERT INTO role (title, salary, department_id)
VALUES ("intern", 0.00, 1), ("junior development", 70000, 2), ("senior development", 110000, 3), ("lead developer", 150000, 4);

INSERT INTO department (name)
VALUES ("hr", "engineering", "research", "QA")

-- create new departments
INSERT INTO department (name)
VALUES  (response);


-- create new roles
INSERT INTO roles (title, salary, department_id)
VALUES  (response, response, response);

-- create new employees
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  (response, response, response, response);

-- view departments
SELECT * FROM department;

-- view roles
SELECT * FROM role;

-- view employees
SELECT * FROM employee;


-- update employee roles
UPDATE employee
SET 
    role_id = 2
WHERE
    employeeID = 3;