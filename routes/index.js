const express=require('express');
const route=express.Router();
const homeController=require('../controllers/homeController');
console.log('router loaded');

route.get('/',homeController.home);

route.use('/create-todo',require('./create'));
route.use('/delete-todo',require('./delete'));

module.exports = route;