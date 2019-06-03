const Temperature = require('../models/tempdata.model');
const db = require('../db');

module.exports = {
  getTempData: (req, res) => {
    db.query("Select * from temp_data", function (err, result) {
      if(err) {
        console.log("error: ", err);
        res.status(404).json({
          message: "Sorry, full nincs ilyen"
        })
      } else {
        // console.log('tasks : ', result);
        res.status(200).json({
          message: "Wow",
          temperatures: result
        });
      }
    });
  },
  getLastTempData: (req, res) => {
    db.query("Select * from temp_data ORDER BY id DESC LIMIT 1", function (err, result) {
      if(err) {
        console.log("error: ", err);
        res.status(404).json({
          message: "Sorry, full nincs ilyen"
        })
      } else {
        // console.log('tasks : ', result);
        res.status(200).json({
          message: "Wow",
          temperatures: result[0].temperature
        });
      }
    });
  },
  getLast10TempData: (req, res) => {
    db.query("Select * from temp_data ORDER BY id DESC LIMIT 5", function (err, result) {
      if(err) {
        console.log("error: ", err);
        res.status(404).json({
          message: "Sorry, full nincs ilyen"
        })
      } else {
        // console.log('tasks : ', result);
        res.status(200).json({
          message: "Wow",
          temperatures: result
        });
      }
    });
  }
}

