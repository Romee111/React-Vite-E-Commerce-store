const mongoose = require("mongoose");
const Product = require("./productmodel");
const subcategorySchema = new mongoose.Schema({ 
    name: {
        type: String,
        required: true
    },
    category_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "category",
        required: true
    },
    image: {
        type: String,
        required: true
    },
    // Product_id: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Product",
    //     required: true
    // }
});
const subcategory = mongoose.model("subcategory", subcategorySchema);
module.exports = subcategory