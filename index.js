// require express for setting up the express server
const express = require('express');

//set up port number
const port = 8000;

///using express
const app = express();

//importing the database
const db = require('./config/mongoose');

//importing database Schema
const toDoList = require('./models/to-do-list');

//using static files
app.use(express.static("./assets"));

//to use encrypted data
app.use(express.urlencoded());

//set up the view engine
app.set('view engine', 'ejs');
app.set('views','./views');

//using the route files
app.use('/',require('./routes'));

app.listen(port, function(err){
    if(err){
        console.log(`Error: ${err}`);
    }
    console.log(`Server up and running on port ${port}`);
});
