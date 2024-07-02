const Addtocart = require("../models/addtocartmodel");
 

exports.createCart=async(req,res)=>{
    try{
         const {user_id,product_id,quantity,price,totalprice,name}=req.body

         const addtocart=await Addtocart.create({
            user_id,product_id,quantity,price,totalprice,name
         })
         res.status(200).json({
            status:"success",   
            addtocart
         })
    }
    catch(err){
        res.status(400).json({
            status:"fail",
            message:err
        })
    }

}


exports.getCart=async(req,res)=>{
    try{
        const addtocart=await Addtocart.findAll().populate(["product_id","user_id"])
        res.status(200).json({
            status:"success",
            addtocart
        })
    }
    catch(err){
        res.status(400).json({
            status:"fail",


            message:err
        })
    }
}

exports.getCartById=async(req,res)=>{
    try{
        const {id}=req.params
        const addtocart=await Addtocart.findOne(id)
        res.status(200).json({
            status:"success",
            addtocart
        })
    }
    catch(err){
        res.status(400).json({
            status:"fail",
            message:err
        })
    }
}

exports.updateCart=async(req,res)=>{
    try{
        const {id}=req.params
        const addtocart=await Addtocart.update(id)
        res.status(200).json({
            status:"success",
            addtocart
        })
    }
    catch(err){
        res.status(400).json({
            status:"fail",
            message:err
        })
    }
}


exports.deleteCart=async(req,res)=>{
    try{
        const {id}=req.params
        const addtocart=await Addtocart.findByIdandDelete(id)
        res.status(200).json({
            status:"success",
            addtocart
        })
    }
    catch(err){
        res.status(400).json({
            status:"fail",
            message:err
        })
    }
}


