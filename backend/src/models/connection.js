const mysql = require('mysql2/promise');
//import dotenv to access .env archive
require('dotenv').config();

// creating a list of connections using creatPool and configure pool using .env data
const connection = mysql.createPool({
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB,
});

// export connection
module.exports = connection;
