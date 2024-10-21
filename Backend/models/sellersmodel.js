const mongoose = require("mongoose");

const sellerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    sellersAddress: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: Date,
        required: true
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    image: {
        type: String,
        required: true
    },
    ID_CardNumber: {
        type: Number,
        required: true
    },
    ID_image1: {
        type: String,
        required: true
    },
    ID_image2: {
        type: String,
        required: true
    },
    Business_Name: {
        type: String,
        required: true
    },
    Business_Address: {
        type: String,
        required: true
    },
    Business_Type: {
        type: String,
        required: true
    },
    Business_registrationNumber: {
        type: String,
    },
    Tax_IDNumber: {
        type: String,
    },
    Bank_AccountNumber: {
        type: String,
    },
    Bank_Name: {
        type: String,
        required: true
    },
    Account_HolderName: {
        type: String,
        required: true
    },
    Branch_Code: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    }




});

const seller = mongoose.model("seller", sellerSchema);
module.exports = seller