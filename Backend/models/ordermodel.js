const  express=require('express');
const mongoose=require('mongoose');
const OrderSchema= new mongoose.Schema({
   
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
    product_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product",
        required:true,
    },

    payment_id:{
        ref:"Payment",
        type:mongoose.Schema.Types.ObjectId,
    },
    order_Status:{
        type:String,
        required:true,
    },
    order_CreatedDate:{
        type:Date,
        default:Date.now(),
    },
    order_updateDate:{
        type:Date,
        default:Date.now(),
    },
    manageOrderSchema:[{
        orderQuantity:{
            type:Number,
            required:true,
        },
        orderTotalPrice:{
            type:Number,
            required:true,
        },}
    ]
    
    
    // Order_Time:{
    //     type:Date,
    //     required:true,
    // },
});
    const order=mongoose.model('Order',OrderSchema);
    module.exports=order;