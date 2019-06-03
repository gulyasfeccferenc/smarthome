var express = require('express');
const tempController = require('./controllers/temperatureController');

var router = express.Router();

// login
router.route('/').get(tempController.getTempData);
router.route('/now').get(tempController.getLastTempData);
router.route('/last').get(tempController.getLast10TempData);

module.exports = router;
