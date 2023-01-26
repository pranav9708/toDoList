// require express to set up express server 
const express = require('express');

//set up port number
const port = 8000;

//import database
const db=require('./config/mongoose');

//import database schema
const  Task  = require('./models/task');

//using express
const app=express();

//set up static files
app.use(express.static('./assets'));

//to use encrypted data
app.use(express.urlencoded({extended: true}));

//setup view engine
app.set('view engine','ejs');
app.set('views','./views');


app.use('/',require('./routers'));

app.listen(port,function(err){
    if(err){
        console.log("Error in running server"+err);
    }
    console.log(`server up and running on ${port}`);
})
