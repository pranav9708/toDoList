const express=require('express');
const route=express.Router();
const homeController=require('../controllers/homeController');
console.log('router loaded');

route.get('/',homeController.home);

module.exports = route;