//import tasksModule
const tasksModel = require('../models/tasksModule'); 
/**
 * @name getAll
 * @description get all tasks data from mySql
 * @constant tasks to save recived tasks from mysql data
 *
 */
const getAll = async (_req,res) => {
  const tasks = await tasksModel.getAll(); // call taskModel getAll to get data from database

  return res.status(200).json(tasks);// return json data
};

/**
 * @name createTask
 * @description create task in the MySQL database
 * @param req object request
 * @param res object response
 */
const createTask = async(req,res) => {
  try {
    const createdTask = await tasksModel.createTask(req.body); // send req body to tasks module
    return res.status(201).json(createdTask); // return the created task as JSON
  } catch (error) {
    console.error('Error creating task:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

/**
 * @name deleteTask
 * @description delete task and subtask in the MySQL database
 * @param taskId id from task
 * @param res object response
 */
const deleteTask = async(taskId,res) => {
  try {
    const deletedTask = await tasksModel.deleteTask(taskId); // send req body to tasks module
    console.log(deletedTask);// return the created task as JSON
    return deletedTask;
  } catch (error) {
    console.error('Error creating task:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

/**
 * @name getSubTaskFromId
 * @description get all sub task using taskId in the MySQL database
 * @param taskId id from task
 * @param res object response
 */
const getSubTaskFromId = async(taskId,res) => {
  try {
    const getTaskUsingId = await tasksModel.getSubTaskFromId(taskId); // send taskId and req body to tasks module
    return getTaskUsingId; // return the created sub task id
  } catch (error) {
    console.error('Error creating subtask:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

/**
 * @name createSubTask
 * @description create sub task in the MySQL database
 * @param taskId id from task
 * @param req object request
 * @param res object response
 */
const createSubTask = async(taskId,req,res) => {
  try {
    const createdTask = await tasksModel.createSubTask(taskId,req.body); // send taskId and req body to tasks module
    return createdTask; // return the created sub task id
  } catch (error) {
    console.error('Error creating subtask:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getAll,
  createTask,
  deleteTask,
  createSubTask,
  getSubTaskFromId
};
