const mongoose = require("mongoose");
const Addtocart = require("./addtocartmodel");
const cartItemSchema = new mongoose.Schema({    
    product_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    size: {
        type: String,
        required: true
    },
    addtocart_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Addtocart",
        required: true
},

});

const cartItem = mongoose.model("CartItem", cartItemSchema);
module.exports = cartItem