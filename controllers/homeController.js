const  Task  = require('../models/task');

module.exports.home = function(req, res){
    Task.find({}, function(err, task){
        if(err){
            console.log('Error in fetching tasks from db');
            return;
        }
        console.log(task);
        return res.render('home', {
            task: task
        });
    }
)}