const express = require('express');
const router= express.Router();

const homeController = require('../controllers/homeController');
router.get('/',homeController.home);

//creating route
router.post('/create-task',require('./create'));

//deleting task router
router.get('/delete-task', require('./delete'));

module.exports = router;
