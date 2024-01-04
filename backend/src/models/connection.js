const mysql = require('mysql2/promise');

// creating a list of connections using creatPool
const connection = mysql.createPool({
  host: '',
  user: '',
  password: '',
  database: '',
});

// export connection
module.exports = connection;
