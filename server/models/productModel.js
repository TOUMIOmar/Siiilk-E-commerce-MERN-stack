const mongoose = require("mongoose")

const productSchema =mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true,
        unique: true,
    },
    image:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    qty:{
        type:Number,
       
    },
    categorie:{
        type:String,
        enum:['admin-product','partenaire-product'],
        default: 'partenaire-product' ,
    },
   
   
})

module.exports =mongoose.model('product',productSchema)