const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    address1:{
    type:String,
    required:true
    },
    address2:{
    type:String,
    required:true
    },
    city:{
    type:String,
    required:true
    },
    state:{
    type:String,
    required:true
    },
    country:{
    type:String,
    required:true
    },
    pincode:{
    type:String,
    required:true
    },
    image:{
    type:String,
    required:true
    },
    

});

const address = mongoose.model("address", addressSchema);
module.exports = address;