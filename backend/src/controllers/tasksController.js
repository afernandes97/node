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
module.exports = {
  getAll,
  createTask
};
