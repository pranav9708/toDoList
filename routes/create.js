const express = require('express');
const route=express.Router();
const createController = require('../controllers/createController');

console.log("inside create.js");
route.get('/',createController.add);

module.exports = route;