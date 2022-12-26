# Project for Beclever challenge — Documentation (WIP)

## Technologies, frameworks and libraries used:
· NodeJS (Express)

· PostgreSQL (Sequelize)

· Morgan

· Nodemon

· Dotenv


## Commands to run the project:
npm run...

"start": starts the project on Node.

"dev" starts it with Nodemon.

"dev:seed1": seeds the database with Employees data.

"dev:seed2": seeds the database with Registers data [currently bugged]

## How to test endpoints:
You will need either ThunderClient if using VSC or Postman to use the endpoints. Default port is 3001.

GET- http://localhost:{PORT}/api/employees

Get a list of all employees.

POST- http://localhost:{PORT}/api/employees

Add a new Employee via BODY:

· properties:

* id: UUID, automatic, required, PK

* name: STRING, required 

* gender: ENUM(['male', 'female']), required

GET- http://localhost:{PORT}/api/registers

Get a list of all employees.

POST- http://localhost:{PORT}/api/registers

Add a new Register via BODY:

· properties:

* id: UUID, required (has default value UUIDV4), PK

* date: DATE, required (has default value current date)

* registerType: ENUM(['entry', 'exit']), required

* businessLocation: STRING, required

## To do:
· Bugfixing.

· Complete services for searching data and averaging entries/exits.

· Implementing Swagger documentation.
