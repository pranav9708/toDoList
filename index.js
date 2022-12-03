const express = require('express');
const app = express();
const port = 8000;
const expressLayout = require('express-ejs-layout');

app.use(expressLayout);
app.use('/',require('./routes'));

app.set('view engine', 'ejs');
app.set('views','./views');

app.listen(port, function(err){
    if(err){
        console.log(`Error: ${err}`);
    }
    console.log(`Server up and running on port ${port}`);
});
