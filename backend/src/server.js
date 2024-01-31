//import app
const app = require('./app');
//import dotenv to access .env archive
require('dotenv').config();
const https = require('https');
const fs = require('fs'); // Importe o módulo fs

//recive port from .env, if this port don't exist, use 3333
const PORT = process.env.PORT || 3333;

//up server on port 3333
https
  .createServer(
    {
      // eslint-disable-next-line no-undef
      key: fs.readFileSync('server.key'),
      // eslint-disable-next-line no-undef
      cert: fs.readFileSync('server.crt'),
    },
    app
  )
  .listen(PORT, () => {
    console.log('API disponível em https://localhost:3333');
  });
