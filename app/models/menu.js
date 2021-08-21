const mongoose=require("mongoose");
const Schema=mongoose.Schema

/* schema is craeted for menu 
    **the item which is necessary can be written by required:true */
   
const menuSchema=new Schema({
    name:{type:String, required:true},
    image:{type:String, required:true},
    price:{type:Number, required:true},
})


module.exports = mongoose.model('Menu',menuSchema)