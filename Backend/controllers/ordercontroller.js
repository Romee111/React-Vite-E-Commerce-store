const order=require("../models/ordermodel")


exports.createOrder=async(req,res)=>{

    try{
        // const ordorder_CreatedDate = req.bosy.order_CreatedDate
        // const orderCreated=manageOrderSchema.map( async order => {
        //     let newManageOrderid =  new ManageOrder({
        //         order_Quantity: order.order_Quantity,
        //         order_TotalPrice: order.order_TotalPrice
        //     })
        //     newManageOrderid=await newManageOrderid.save();
        //     return orderCreated
            
        // });
        const matchuserProduct=await order.find({user_id:req.body.user_id,product_id:req.body.product_id})
        if(!matchuserProduct){
            return res.status(404).json({message:"product not found"})
        }
        const {user_id,product_id,shipping_Address,payment_Method,payment_Status,order_Status,order_CreatedDate }=req.body 
    const newOrder=new order({
      
        user_id,
        product_id,
        shipping_Address,
        payment_Method,
        payment_Status,
        order_Status,
         manageOrderSchema:order_CreatedDate
    });
   
          const savedOrder=await newOrder.save();
        res.status(200).json(savedOrder);
    }catch(err){
        console.log(err);     
        res.status(500).json(err);

    }
}

// exports.getOrder=async(req,res)=>{
//     try{
//         // const id=req.params.id;
//         const order=await Order.find().populate("user_id","Product_id");
//         res.status(200).json(order);
//     }catch(err){
//         res.status(500).json(err);
//     }
// }

exports.getlistOrder=async(req,res)=>{
    try{
        console.log("Test test");
        const Order=await order.find()
        .populate(["user_id", "product_id"])


        res.status(200).json({
            success:true,
            Order
        });
    }catch(err){
        res.status(500).json({
            success:false,
            error:err.message
        });
    }
}

 exports.updateOrder=async(req,res)=>{
    try{
        const {id}=req.params;
        const updatedOrder=await order.findByIdAndUpdate(id,{
            $set:req.body
        },{new:true});
        res.status(200).json(updatedOrder);
    }catch(err){
        res.status(500).json(err);
    }
 }

 exports.deleteOrder=async(req,res)=>{
    try{
    
      const dlt=  await order.findByIdAndDelete(req.params.id);
      if(!dlt)
        {
            return res.status(400).json({
                success:false,
                error:"No Order Found"
            })
          
        }
        res.status(200).json({"Order has been deleted":dlt});
      

      
    }catch(err){
        res.status(500).json(err);
    }
 }      
 