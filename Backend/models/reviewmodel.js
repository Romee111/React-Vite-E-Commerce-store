 const  moongooose = require("mongoose");
 const reviewSchema = new moongooose.Schema({
     product_id: {
         type: moongooose.Schema.Types.ObjectId,
         ref: "product",
         required: true
     },
     user_id: {
         type: moongooose.Schema.Types.ObjectId,
         ref: "user",
         required: true
     },
     rating: {
         type: moongooose.Schema.Types.ObjectId,
         required: true
     },
     review: {
         type: String,
         required: true
     }
 });
 const review = moongooose.model("review", reviewSchema);
 module.exports = review    