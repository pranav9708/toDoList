const db= require('../config/mongoose');

const Task= require('../models/to-do-list');

module.exports.home= function(req,res){
    Task.find({},function(err,task){
            if(err){
                console.log("error in fetching data from database");
                return;
            }
            res.render('home',{task:task});
    })
}