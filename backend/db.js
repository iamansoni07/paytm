
const mongoose = require('mongoose'); 
mongoose.connect("mongodb+srv://amansoni0713:lqjkfIRuZ62nli9A@amansoni0713.u7fg5pc.mongodb.net/");

const userSchema = mongoose.Schema({ 
    username : {
        type: String, 
        require: true, 
        unique: true, 
        lowercase: true, 
        trim: true, 
        minlength: 3, 
        maxlength: 30, 
        match: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    },
    firstname: {
        type: String, 
        require: true, 
        maxlength: 50, 
    }, 
    lastname: {
        type: String, 
        require: true, 
        maxlength: 50, 
    }, 
    password : {
        type: String, 
        require: true, 
        minlength: 8, 
    }, 
}) 
  
const userDB = new mongoose.model("user", userSchema)

mongoose.exports = {
    userDB: userDB
};