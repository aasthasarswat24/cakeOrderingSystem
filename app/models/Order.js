const mongoose = require("mongoose");
const Schema = mongoose.Schema

/* creates schema for order page where customer details are taken */

//customerID is different for every user
const orderSchema = new Schema({
    customerId:{
        type: mongoose.Schema.Types.ObjectId, 
        ref:'User', 
        required:true
    },
    items:{type:Object, required:true},
    phone:{type:String, required:true},
    address:{type:String, required:true},
    paymentType:{type:String, default:'COD'},
    status:{type:String, default:'order_placed'}

},{timestamps:true})

/* creates a model of order schemaas order which is exported */

module.exports = mongoose.model('Order', orderSchema)