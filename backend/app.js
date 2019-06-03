const express = require('express');
const mysql = require('mysql');
const db = require('./db');
// const bodyParser = require('body-parser');

const Temperature = require('./models/tempdata.model');

const app = express();

// app.use(bodyParser.urlencoded({
//   extended: true
// }));
// app.use(bodyParser.json());


app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader(
    'Access-Control-Allow-Headers','Access-Control-Allow-Headers, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, authorization');
    // "Access-Control-Request-Headers, Origin, X-Request-With, Content-Type, Accept");
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, DELETE, PUT, OPTIONS, HEAD');
  next();
});

// routing
var routes = require('./routes');
app.use(routes);

module.exports = app;
