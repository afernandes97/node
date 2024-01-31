//import express
const express = require('express');
//import tasks controller
const tasksController = require('./controllers/tasksController');

//instantiate router
const router = express.Router();

//routers
router.get('/tasks', tasksController.getAll); //call getAll function from tasks controller
router.post('/tasks', tasksController.createTask); //call createTask function from tasks controller
router.delete('/delete-task/:taskId', async (req,res) => {
  try{
    const { taskId } = req.params;
    const result = await tasksController.deleteTask(parseInt(taskId),req);
    return res.status(200).json({message: `${result} tarefa deletada`});
  }catch(error){
    res.status(500).json({error: 'Erro ao excluir tarefa'});
  }
}); //call deleteTask function from tasks controller

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

router.get('/tasks/:taskId/getSubTasks', async (req, res) => {
  try {
    const { taskId } = req.params; // get task id from requisition params
    const result = await tasksController.getSubTaskFromId(parseInt(taskId),res); //call getSubTaskFromId in tasks controller and send task id & res
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

//export module
module.exports = router;
