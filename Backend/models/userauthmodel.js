const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
    type:String,
    required:true
    },
    password:{
    type:String,
    required:true
    },
    retypePassword:{
    type:String,
    required:false
    },
    phone:{
    type:String,
    required:true
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
    default:"../assets/reslogo.png"
    
    },
    isAdmin:{
    type:String,
    default:false
    },
    isShipper:{
    type:String,
    default:false
    },
    })

    const users=new mongoose.model("User",userSchema)

    module.exports=users
