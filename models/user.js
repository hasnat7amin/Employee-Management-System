const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    name:{
        type: String,
    },
    email:{
        type: String,
    },
    password:{
        type: String,
    },
    token:{
        type: String
    }
    
})

const users = mongoose.model("users", UserSchema)
module.exports = users