//import mysql connection
const connection = require('./connection');

/**
 * @name getAll
 * @description get all tasks data from mySql
 * @constant tasks to save recived tasks from mysql data
 *
 */
const getAll = async () => {
  const [tasks] = await connection.execute('SELECT * FROM tasks'); // using connection.execute to execute sql querys, [tasks] to get first index of returned array

  //return tasks data, array zero to get data from data base, array 1 have buffer data
  return tasks;
};

/**
 * @name createTask
 * @description create task in database mySql
 * @param task object task reviced from tasks controller
 */
const createTask = async (task) => {
  const { title } = task;
  const { description } = task;
  //UTC Date
  const dateUTC = new Date(Date.now()).toUTCString();

  //query to persist on database
  const queryBD = 'INSERT INTO tasks(title,status,description,created_at) VALUES (?,?,?,?)';

  // execute query and pass params
  const [createdTask] = await connection.execute(
    queryBD,
    [title, 'Awaiting', description, dateUTC]
  );

  return {insertId: createdTask.insertId};
};

module.exports = {
  getAll,
  createTask,
};
