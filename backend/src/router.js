//import express
const express = require('express');
//import tasks controller
const tasksController = require('./controllers/tasksController');

//instantiate router
const router = express.Router();

//routers
router.get('/tasks', tasksController.getAll); //call getAll function from tasks controller

//export module
module.exports = router;