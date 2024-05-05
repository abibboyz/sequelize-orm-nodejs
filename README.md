Stating project
npm init -> generates package.json file
npm install --save express sequelize sequelize-cli --> install dependencies for express and sequelize ORM
npx sequelize-cli init --> generates some configuration file like config, migrations, seeders and models folders
Link: https://sequelize.org/docs/v7/cli/

node server.js ---> (To run the project) --> Used as a Starting point

------>
Controller and Router folder created to structure the project
Simple PostList string is rendered to the browser on visiting /post

------> 

install mysql2
npm install --save mysql2

First of all connect to correct mysql db by creating a db in mysql and 
add the db name on config.json file, depending on what db to used for development, tests or production.

Create 4 database table with sequelize-cli to create model and migration with command below.

(DONT USE SPACES AFTER ATTRIBUTES FOR TABLE NAME AND DATATYPES)
-posts  --> npx sequelize-cli model:generate --name Post --attributes title:string,content:text,imageUrl:string,categoryId:integer,userId:integer
--> Updated post migration field imageURL allowNull to true.

-users --> npx sequelize-cli model:generate --name User --attributes name:string,email:string,password:string
-categories  --> npx sequelize-cli model:generate --name Category --attributes name:string
-comments  --> npx sequelize-cli model:generate --name Comment --attributes content:text, postId:integer,userId:integer

NOW RUN MIGRATION WITH BELOW COMMAND: THIS HELPS TO GENERATE DATABASE TABLES CREATED USING ABOVE COMMANDS.
npx sequelize-cli db:migrate
---------------

body-parser installed to work with JSON
Posts request end point created to insert data to posts model.