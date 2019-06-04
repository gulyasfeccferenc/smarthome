const db = require('../db');

module.exports = {
  getHumidityData: (req, res) => {
    db.query("Select * from hum_data", function (err, result) {
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
  getLastHumidityData: (req, res) => {
    db.query("Select * from hum_data ORDER BY id DESC LIMIT 1", function (err, result) {
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
  getLast10HumidityData: (req, res) => {
    db.query("Select * from hum_data ORDER BY id DESC LIMIT 10", function (err, result) {
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

