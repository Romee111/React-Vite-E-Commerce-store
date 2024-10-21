const order=require("../models/ordermodel")
const mongoose=require("mongoose")


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
exports.createOrder = async (req, res) => {
    try {
        // Destructure the required fields from the request body
        const { user_id, product_id, shipping_Address, payment_Method, payment_Status, order_Status, order_CreatedDate } = req.body;

        // Ensure that user_id and product_id are valid ObjectId types
        const validUserId = mongoose.Types.ObjectId.isValid(user_id);
        const validProductId = mongoose.Types.ObjectId.isValid(product_id);

        if (!validUserId || !validProductId) {
            return res.status(400).json({ message: "Invalid user_id or product_id" });
        }

        // Check if the product already exists for the user
        const matchuserProduct = await Order.findOne({ user_id: user_id, product_id: product_id });
        if (!matchuserProduct) {
            return res.status(404).json({ message: "Product not found for the user" });
        }

        // Create a new order object
        const newOrder = new Order({
            user_id: mongoose.Types.ObjectId(user_id),  // Ensure it's ObjectId
            product_id: mongoose.Types.ObjectId(product_id),  // Ensure it's ObjectId
            // shipping_Address,
            // payment_Method,
            // payment_Status,
            order_Status,
            manageOrderSchema: order_CreatedDate  // Assuming manageOrderSchema is correctly defined in your model
        });

        // Save the new order
        const savedOrder = await newOrder.save();
        res.status(200).json(savedOrder);

    } catch (err) {
        console.error("Error creating order:", err);
        res.status(500).json({ message: "Server error", error: err });
    }
};

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
exports.getOrderById=async(req,res)=>{
    try{
        const Order=await order.findById(req.params.id)
        .populate(["user_id", "product_id"])
        res.status(200).json(Order);
    }catch(err){
        res.status(500).json(err);
    }
}

exports.trackOrder = async (req, res) => {
    try {
        const { orderId } = req.params;
        const order = await order.findById(orderId);
        
        if (!order) {
            return res.status(404).json({
                success: false,
                message: 'Order not found',
            });
        }
        
        res.status(200).json({
            success: true,
            data: order,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
 