const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
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
    address1: {
        type: String,
        required: true
    },
    address2: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    sellersAddress: {
        type: String,
        required: false
    },
    phone: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: Date,
        required: true
    },
    ID_CardNumber: {
        type: Number,
        required: false
    },
    ID_image1: {
        type: String,
        required: false
    },
    ID_image2: {
        type: String,
        required: false
    },
    Business_Name: {
        type: String,
        required: false
    },
    Business_Address: {
        type: String,
        required: false
    },
    Business_Type: {
        type: String,
        required: false
    },
    Business_registrationNumber: {
        type: String,
        required: false
    },
    Tax_IDNumber: {
        type: String,
        required: false
    },
    Bank_AccountNumber: {
        type: String,
        required: false
    },
    Bank_Name: {
        type: String,
        required: false
    },
    Account_HolderName: {
        type: String,
        required: false
    },
    Branch_Code: {
        type: String,
        required: false
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    country: {
        type: String,
        required: true
    },
    pincode: {
        type: String,
        required: true
    },
    image: {
        type: String,
        default: "../assets/reslogo.png",
        required: false
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    isSeller: {
        type: Boolean,
        default: false
    },
})


const users = new mongoose.model("User", userSchema)

module.exports = users
