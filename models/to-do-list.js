const mongoose= require('mongoose');

const listSchema=new mongoose.Schema({
    description:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        required: true
    }
    
});

const toDoList = mongoose.model('toDoList',listSchema);

module.exports = toDoList;