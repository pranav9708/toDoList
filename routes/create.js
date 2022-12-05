const express = require('express');
const route=express.Router();
const createController = require('../controllers/createController');


route.get('/',createController.add);

module.exports = route;