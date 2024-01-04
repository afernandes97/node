//import tasksModule
const tasksModel = require('../models/tasksModule'); 
/**
 * @name getAll
 * @description get all tasks data from mySql
 * @constant tasks to save recived tasks from mysql data
 *
 */
const getAll = async (req,res) => {
  const tasks = await tasksModel.getAll(); // call taskModel getAll to get data from database

  return res.status(200).json(tasks);// return json data
};

module.exports = {
  getAll,
};
