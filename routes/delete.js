const express = require('express');
const route=express.Router();
const deleteController =require('../controllers/deleteController');


route.get('/',deleteController.delete);

module.exports = route;