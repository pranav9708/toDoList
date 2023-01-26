const express=require('express');
const route=express.Router();
const deleteController =require('../controllers/deleteController');

// deleting Tasks
route.get('/delete-task',deleteController.delete);

module.exports=route;
