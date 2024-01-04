//import app
const app = require('./app');
//import dotenv to access .env archive
require('dotenv').config();

//recive port from .env, if this port don't exist, use 3333
const PORT = process.env.PORT || 3333;

//up server on port 3333
app.listen(PORT, () => console.log('Server is running'));