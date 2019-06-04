var express = require('express');
const tempController = require('./controllers/temperatureController');
const humidityController = require('./controllers/humidityController');
var router = express.Router();

// login
router.route('/temperature/').get(tempController.getLastTempData);
router.route('/temperature/all').get(tempController.getTempData);
router.route('/temperature/last10').get(tempController.getLast10TempData);
router.route('/humidity/').get(humidityController.getLastHumidityData);
router.route('/humidity/all').get(humidityController.getHumidityData);
router.route('/humidity/last10').get(humidityController.getLast10HumidityData);

module.exports = router;
