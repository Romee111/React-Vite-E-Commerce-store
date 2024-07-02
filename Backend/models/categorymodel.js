const mongoose = require("mongoose");
const subcategory = require("./subcategorymodel");

const categorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    // subcategory_name:{
    //     type:mongoose.Schema.Types.ObjectId,
    //     ref:"subcategory"
    // },
    subcategory_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"subcategory"
    }
})

  const category = mongoose.model("category", categorySchema)
module.exports = category;