now npm for orm 
1:npm i sequelize
2:npm i mysql2
3:npm i -D sequelize-cli
4:npx sequelize-cli init
5:npx tsc CONVERT
src/config/config.ts
        ↓
dist/config/config.js
6:npx sequelize-cli db:migrate
7: npx sequelize-cli db:migrate: undo this is for deleting or drop table
cd .. for exit


We'll use just one example: a Users table.
Imagine you want this in MySQL
You want a table called users:
users

id    name       email
1     Shashank   shashank@gmail.com
2     Rahul      rahul@gmail.com

There are 3 different things you need to understand.
1. Migration = CREATE the table
First, the table doesn't exist.
You need to tell MySQL:
"Create a users table with these columns."

That's the job of a migration.
Migration
    ↓
"Create users table"
    ↓
MySQL
    ↓
users table created

So remember:
Migration = changes the database
For example:
Create users table
Add email column
Remove age column

2. Model = USE the table from your code
Now the table exists.
Your Express application wants to get users.
Your code might say:
User.findAll()

Or create a user:
User.create({
    name: "Shashank",
    email: "shashank@gmail.com"
})

User here is the Model.
So:
Express/Node.js
       ↓
     User Model
       ↓
   users table
       ↓
     MySQL

Model = your code's way of working with the table
3. Seeder = PUT DATA into the table
Suppose the table is empty:
users

id    name    email
--------------------

You want some starting/sample data:
1    Shashank    shashank@gmail.com
2    Rahul       rahul@gmail.com

A seeder puts that data into the table.
Seeder
  ↓
Insert data
  ↓
users table

Seeder = puts data into the database
Now see all three together
Imagine you're building a house.
Migration
Builds the empty house:
┌─────────────────────┐
│                     │
│       EMPTY         │
│                     │
└─────────────────────┘

Model
Gives your application a way to work with the house.
Application
     ↓
   Model
     ↓
   House

Seeder
Puts things inside the house:
┌─────────────────────┐
│ 🛏️   🪑   🖥️        │
│                     │
└─────────────────────┘

In database terms
             MySQL
               ↑
               │
        ┌──────┴──────┐
        │             │
    Migration       Seeder
        │             │
        ↓             ↓
   Creates table   Inserts data
        │
        ↓
    users table
        ↑
        │
      Model
        ↑
        │
   Node.js/Express

One very important example
Suppose you start with:
users
----------------
id
name
email

Then tomorrow you decide:
"I also want phone number."

What do you do?
Migration:
Add phone column

Then database becomes:
users
----------------
id
name
email
phone

Model:
You update the User model so your Node.js code knows about phone.
Seeder:
If you want sample users with phone numbers, update/create a seeder.
Remember these 3 sentences
Don't memorize anything else for now:
🟢 Migration
"I want to change the database."

🔵 Model
"I want my Node.js code to work with the database table."

🟡 Seeder
"I want to put some data into the database."

And your Sequelize folders make sense now:
project
│
├── models/       → How code works with data
│
├── migrations/   → How database structure changes
│
└── seeders/      → Data to insert

If you understand just "Migration = change table, Model = use table, Seeder = insert data", you have the core idea.
# Airbnb-Node
