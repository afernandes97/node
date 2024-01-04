// import express
const express = require('express');
//import router
const router = require('./router');

//instantiate app using express
const app = express();

//to application understend json
app.use(express.json());

//using router on app
app.use(router); // all request send to app, will use router to administration this

//export module
module.exports = app;