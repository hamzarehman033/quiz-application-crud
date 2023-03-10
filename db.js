const mysql = require("mysql2");
const dbConfig = require("./config.js");

// Create a connection to the database
const connection = mysql.createConnection(dbConfig.db);

// open the MySQL connection
connection.connect(error => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});

module.exports = connection;