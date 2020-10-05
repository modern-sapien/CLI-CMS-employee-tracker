## CLI CMS EMPLOYEE TRACKER
##    Process Document

## Prompt
Create a CMS that allows nondevelopers to interact with information stored in an employee database.

* Packages to use; node, inquirer, MySQL

## TABLE CREATION

Create an employee database with three tables
    *   Employee Table
            id              int AI              PK
            -----------------------------------
            first_name      varchar(30)
            last_name       varchar(30)
            role_id         int
            manager_id      int

    *   Role Table
            id              int AI              PK
            --------------------------------------
            title           varchar(30)
            salary          decimal
            department_id   int
    
    *   Department
            id              int AI              PK
            --------------------------------------
            name            varchar(30)

## CLI MVP functionality

    *   Add departments, roles, employees

    *   View departments, roles, employees

    *   Update employee roles

    --------------------------

    *   Update employee managers

    *   View employees by manager

    *   Delete department, roles and employees

    *   View the total utilized budget of a deparment -- ie combined salaries of all employees in that department 