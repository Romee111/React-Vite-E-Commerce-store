const order=require("../models/ordermodel")
const mongoose=require("mongoose")



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
      const { user_id, product_id, cart_id, payment_id, order_Status, manageOrderSchema } = req.body;
  
      // Fetch the user data
      const user = await User.findById(user_id);
      if (!user) return res.status(404).json({ message: 'User not found' });
  
      // Fetch the product data
      const product = await Product.findById(product_id);
      if (!product) return res.status(404).json({ message: 'Product not found' });
  
      // Fetch the cart if it's provided
      let cart = null;
      if (cart_id) {
        cart = await Cart.findById(cart_id);
        if (!cart) return res.status(404).json({ message: 'Cart not found' });
      }
  
      // Create a new order
      const newOrder = new Order({
        user_id,
        product_id,
        cart_id,
        payment_id,
        order_Status,
        manageOrderSchema,
      });
  
      // Save the order to the database
      const savedOrder = await newOrder.save();
  
      // Send email to the user
      await sendOrderConfirmationEmail(user.email, savedOrder);
  
      res.status(201).json({ message: 'Order created successfully', order: savedOrder });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Function to send email
  async function sendOrderConfirmationEmail(userEmail, order) {
    // Set up nodemailer transport configuration
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      // You can use other services like SendGrid, Outlook, etc.
      auth: {
        user: process.env.EMAIL, // Replace with your email
        pass:process.env.PASSWORD // Replace with your password or app password if using Gmail
      },
    });
  
    // Email options
    const mailOptions = {
      from: process.env.EMAIL, // Sender address
      to: user.email, // Recipient address
      subject: 'Order Confirmation',
      text: `Thank you for your order! Your order ID is ${order._id}. We are processing it and will update you soon.`,
      html: `<p>Thank you for your order!</p><p>Your order ID is <strong>${order._id}</strong>.</p><p>We are processing it and will update you soon.</p>`,
    };
  
    // Send email
    return transporter.sendMail(mailOptions);
  }

// exports.createOrder = async (req, res) => {
//     try {
//         // Destructure the required fields from the request body
//         const { user_id, product_id, shipping_Address, payment_Method, payment_Status, order_Status, order_CreatedDate } = req.body;

//         // Ensure that user_id and product_id are valid ObjectId types
//         const validUserId = mongoose.Types.ObjectId.isValid(user_id);
//         const validProductId = mongoose.Types.ObjectId.isValid(product_id);

//         if (!validUserId || !validProductId) {
//             return res.status(400).json({ message: "Invalid user_id or product_id" });
//         }

//         // Check if the product already exists for the user
//         const matchuserProduct = await Order.findOne({ user_id: user_id, product_id: product_id });
//         if (!matchuserProduct) {
//             return res.status(404).json({ message: "Product not found for the user" });
//         }

//         // Create a new order object
//         const newOrder = new Order({
//             user_id: mongoose.Types.ObjectId(user_id),  // Ensure it's ObjectId
//             product_id: mongoose.Types.ObjectId(product_id),  // Ensure it's ObjectId
//             // shipping_Address,
//             // payment_Method,
//             // payment_Status,
//             order_Status,
//             manageOrderSchema: order_CreatedDate  // Assuming manageOrderSchema is correctly defined in your model
//         });

//         // Save the new order
//         const savedOrder = await newOrder.save();
//         res.status(200).json(savedOrder);

//     } catch (err) {
//         console.error("Error creating order:", err);
//         res.status(500).json({ message: "Server error", error: err });
//     }
// };

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
 