User Registration and Address Storage System
This project is a basic web application that allows users to register by submitting their name and address. The application stores the user's information in a relational database with a one-to-many relationship between users and addresses.

Features
1. User registration form to submit name and address.
2. Stores user details in a User table and addresses in an Address table.
3. Implements a one-to-many relationship, where one user can have multiple        addresses.
4. Built using Node.js, Express, and MySQL or any other relational database.
Simple API for user registration.


Installation and Setup
1. Clone the repository
bash
Copy code
git clone https://github.com/priyanshu9026/SmokeTreesAssignment.git
cd user-address-registration
2. Install dependencies
Before running the project, you need to install all the necessary packages:

bash
Copy code
npm install
3. Database Setup
Make sure you have a relational database (like MySQL or PostgreSQL) installed and running. Create a new database for the project.

Create two tables:
User: Contains fields for id (primary key) and name.
Address: Contains fields for id (primary key), address, and userId (foreign key referencing User).
You can modify the database connection settings in the project’s configuration file (like config.js or db.js).

4. Configure the database
Edit the db.js file (or equivalent configuration) to include your database credentials:

js
Copy code
const sequelize = new Sequelize('database_name', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql', 
});
5. Migrate the database
Once your database connection is set, run migrations to create the necessary tables:

bash
Copy code
npx sequelize-cli db:migrate
6. Start the server
Run the following command to start the Express server:

bash
Copy code
npm start
The server should now be running on http://localhost:3000 by default.

API Endpoints
1. POST /register
This endpoint allows a user to register by submitting their name and address.

Request Body:

json
Copy code
{
  "name": "Priyanshu singh",
  "address": "jaunpur, UP, INDIA"
}
Response:

Success: Returns a success message with the newly created user and address.
Error: Returns an error message if something goes wrong.
Testing
You can use tools like Postman or Insomnia to test the API.

Open Postman.
Create a POST request to http://localhost:3000/register.

Dependencies
Node.js: Backend runtime environment.
Express.js: Web framework for building the server.
Sequelize: ORM for connecting and managing the database.
MySQL (or PostgreSQL): Relational database for storing user and address data.
Body-parser: Middleware to handle form submissions.
#   S m o k e T r e e s A s s i g n m e n t 
 
 
