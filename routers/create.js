const express=require('express');
const route=express.Router();

const createController =require('../controllers/createController');
// console.log("inside create");
// creating Tasks
route.post('/create-task', createController.create);

module.exports=route;