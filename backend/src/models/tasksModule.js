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
  const queryBD =
    'INSERT INTO tasks(title,status,description,created_at) VALUES (?,?,?,?)';

  // execute query and pass params
  const [createdTask] = await connection.execute(queryBD, [
    title,
    'Awaiting',
    description,
    dateUTC,
  ]);

  return { insertId: createdTask.insertId };
};

/**
 * @name getAll
 * @description get all tasks data from mySql
 * @constant tasks to save recived tasks from mysql data
 *
 */
const getSubTaskFromId = async (taskId) => {
  const query = 'SELECT * FROM subtasks WHERE task_id = ?'; // using connection.execute to execute sql querys, [tasks] to get subtasks

  try {
    const [subtasks] = await connection.execute(query, [taskId]);
    return subtasks;
  } catch (error) {
    console.error('Erro ao obter subtasks:', error);
    throw error;
  }
};

/**
 * @name createSubTask
 * @description create sub task in database mySql
 * @param taskId id from task
 * @param task object task reviced from tasks controller
 */
const createSubTask = async (taskId, subTask) => {
  const { title } = subTask; // get title from req body
  const { description } = subTask; // get description from req body
  //UTC Date
  const dateUTC = new Date(Date.now()).toUTCString(); // get today in utc date

  //create a query bd to insert subtasks at table
  const queryBD =
    'INSERT INTO subtasks(task_id, title, description, created_at) VALUES (?,?,?,?)';

  //create a connection to bd and send data
  const [createSubTask] = await connection.execute(queryBD, [
    taskId,
    title,
    description,
    dateUTC,
  ]);

  return { insertId: createSubTask.insertId }; // return id for new subtask
};

module.exports = {
  getAll,
  createTask,
  createSubTask,
  getSubTaskFromId
};
