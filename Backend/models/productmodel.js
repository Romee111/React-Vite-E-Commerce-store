const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        },

    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    images:[ {
        type: String,
        required: true,
    }],

    rating: {
        type: Number,
        required: true,
        default: 0
    },
    instock: {
        type: Number,
        required: true,
    },
    brand: {
        type: String,
        required: true,
    },
    category_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "category",
    },
    subcategory_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "subcategory",
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
    },
    productCreatedDate: {
        type: Date,
        default: Date.now(),
    },
    productUpdateDate: {
        type: Date,
        default: Date.now(),
    },
    numReviews: {
        type: Number,
        required: true,
        default: 0
    },
    sizes:[{
        type: String,
        required: true
    }],
    colors:[ {
        type: String,
        required: true
    }],
   createdBy: {
      ref: "User",
      type: mongoose.Schema.Types.ObjectId
   }
    
});
const Product = mongoose.model("Product", productSchema);
module.exports = Product;
