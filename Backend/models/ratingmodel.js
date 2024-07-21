const mongoose = require("mongoose");

const ratingSchema = new mongoose.Schema({  
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
    rating: {
        type: Number,
        required: true
    }
});
const rating = mongoose.model("Rating", ratingSchema);
module.exports = rating