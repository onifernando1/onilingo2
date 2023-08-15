const Pool = require("pg").Pool;
require("dotenv").config();

const pool = new Pool({
  user: process.env.DB_USERNAME,
  host: "localhost",
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: "5432",
});

pool.query("SELECT * FROM Words", (error, result) => {
  if (error) {
    console.error("Error executing SELECT query:", error);
  } else {
    console.log("done");
    console.log("Query result:", result.rows);
  }
});
