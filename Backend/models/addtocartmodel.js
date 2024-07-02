const mongoose=require('mongoose');
const express=require('express');

const addtocartSchema=new  mongoose.Schema({
    product_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Product',
        required:true

    },
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
        
    },
    cartItem:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'CartItem',
    },
    totalprice:{
        type:Number,
        required:true,
        default:0
    },
    totalItem:{
        type:Number,
        required:true,
        default:0
    },
    discount:{
        type:Number,
        required:true,
        default:0
    },
    totalDiscountPrice:{
        type:Number,
        required:true,
        default:0
    }
    // name:{
    //     type:String,
    //     required:true
    // },

    // quantity:{
    //     type:Number,
    //     required:true
    // },
    // price:{
    //     type:Number,
    //     required:true
    // },
    


})
 const Addtocart=mongoose.model('Addtocart',addtocartSchema);
 module.exports=Addtocart