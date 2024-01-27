//import express
const express = require('express');
//import tasks controller
const tasksController = require('./controllers/tasksController');

//instantiate router
const router = express.Router();

//routers
router.get('/tasks', tasksController.getAll); //call getAll function from tasks controller
router.post('/tasks', tasksController.createTask); //call createTask function from tasks controller
router.post('/tasks/:taskId/addSubtask', async (req, res) => {
  try {
    const { taskId } = req.params; // get task id from requisition params
    const result = await tasksController.createSubTask(parseInt(taskId), req); //call crateSubTask in tasks controller and send task id & req to function
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

//export module
module.exports = router;
