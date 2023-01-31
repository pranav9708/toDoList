const  Task  = require('../models/task');

module.exports.home = function(req, res){
    Task.find({}, function(err, task){
        if(err){
            console.log('Error in fetching tasks from db');
            return;
        }
        console.log(task);
        //sending task back to home ejs file
        return res.render('home', {
            task: task
        });
    }
)}