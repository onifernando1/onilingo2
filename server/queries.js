const Pool = require("pg").Pool;
require("dotenv").config();
const { v4: uuidv4 } = require("uuid");

const pool = new Pool({
  user: process.env.DB_USERNAME,
  host: "localhost",
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: "5432",
});

// pool.query(
//   "CREATE TABLE IF NOT EXISTS lessons(id SERIAL PRIMARY KEY,name VARCHAR(50),number INTEGER)",
//   (error, results) => {
//     if (error) {
//       console.error("Error creating table:", error);
//     } else {
//       console.log("Table created successfully");
//     }
//   }
// );

// pool.query(
//   "CREATE TABLE IF NOT EXISTS words(id SERIAL PRIMARY KEY,english VARCHAR(50),portuguese VARCHAR(50),times_seen INTEGER,times_wrong INTEGER,status VARCHAR(50),last_studied_date DATE ,to_be_studied_date DATE,percentage INTEGER,last_five_array BOOLEAN[],last_five_percentage INTEGER,image VARCHAR(50),sound VARCHAR(50),lessonId INTEGER REFERENCES lessons(id))",
//   (error, results) => {
//     if (error) {
//       console.error("Error creating table:", error);
//     } else {
//       console.log("Table created successfully");
//     }
//   }
// );
module.exports = pool;
