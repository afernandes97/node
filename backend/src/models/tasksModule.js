//import mysql connection
const connection = require('./connection');

/**
 * @name getAll
 * @description get all tasks data from mySql
 * @constant tasks to save recived tasks from mysql data
 *
 */
const getAll = async() => {
  const tasks = await connection.execute('SELECT * FROM tasks'); // using connection.execute to execute sql querys
  
  //return tasks data
  return tasks;
};

module.exports = {
  getAll,
};
