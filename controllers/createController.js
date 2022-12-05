const db = require('../config/mongoose');

const Task =require('../models/to-do-list');

module.exports.add= function(req,res){

    console.log("inside createController");
    Task.create({
        description: req.body.description,
        category: req.body.category,
        date: req.body.date
        }, function(err,newtask){
            if(err){
                console.log("error in createing new task");
            }
            console.log(newtask);
            return res.redirect('back');
        });
}