'user strict';

var mysql = require('mysql');

//local mysql db connection
var connection = mysql.createConnection({
  host     : '192.168.0.100',
  user     : 'monitor',
  password : 'password',
  database : 'smarthome'
});

connection.connect(function(err) {
  if (err) {
    throw err;
  } else {
    console.log("Connected to db!");
  }
});

module.exports = connection;
