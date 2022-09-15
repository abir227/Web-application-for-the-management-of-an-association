const mongoose = require('mongoose')
//const {ObjectId} = mongoose.Schema.Types
const userSchema = new mongoose.Schema({
    nom:{
        type:String,
        required:true
    },
    telephone:{
        type:String,
        required:true
    },
    produit:{
        type:String,
        required:true
    },
  
    lieu:{
        type:String,
        required:true
    },
    bureau:{
        type:String,
        required:true
    }
   
})

mongoose.model("user",userSchema)
