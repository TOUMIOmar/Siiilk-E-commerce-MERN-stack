const mongoose = require("mongoose")

const personSchema =mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique: true,
    },
    password:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        
    },

    img:{
        type:String,
    },

    role:{
        type:String,
        enum:['user','admin','Partenaire'],
        default: 'user' ,
    }
})

module.exports =mongoose.model('person',personSchema)