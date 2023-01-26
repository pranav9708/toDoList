const  Task  =require('../models/task');

module.exports.create=function(req, res){
      
      Task.create({
          description: req.body.description,
          category: req.body.category,
          date: req.body.date
          }, function(err, newtask){
          if(err){console.log('error in creating task', err); return;}
          
  
          //console.log(newtask);
          return res.redirect('back');
  
      });
  }