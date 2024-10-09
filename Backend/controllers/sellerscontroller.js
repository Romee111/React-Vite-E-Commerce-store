const  seller= require("../models/sellersmodel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.createSeller = async (req, res) => {
    try {
        const { userId, name, email, password, phone, sellersAddress, image, dateOfBirth, ID_CardNumber, ID_image1, ID_image2, Business_Name, Business_Address, Business_Type, Business_registerationNumber, Tax_IDNumber, Bank_Name, Bank_AccountNumber, Bank_Branch, Account_HolderName, Branch_Code } = req.body;

        // Check if the user exists
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Check if the user is already a seller
        if (user.isSeller) {
            return res.status(400).json({ message: "User is already a seller" });
        }

        // Hash the password if provided (for cases where a user might update their password)
        let hashPassword;
        if (password) {
            hashPassword = await bcrypt.hash(password, 10);
        }

        // Create a new seller profile linked to the user
        const newSeller = new seller({
            userId: user._id,
            name,
            email: user.email, // Use the existing email from the user
            password: hashPassword || user.password, // Use the existing password if not updated
            phone,
            sellersAddress,
            dateOfBirth,
            image,
            ID_CardNumber,
            ID_image1,
            ID_image2,
            Business_Name,
            Business_Address,
            Business_Type,
            Business_registerationNumber,
            Tax_IDNumber,
            Bank_Name,
            Bank_AccountNumber,
            Account_HolderName,
            Branch_Code,
            isSeller: true
        });

        // Save the seller profile
        await newSeller.save();

        // Update the user role to seller
        user.isSeller = true;
        await user.save();

        res.status(201).json({
            success: true,
            data: newSeller,
            message: "Seller account created successfully"
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


exports.getAllSellers = async (req, res) => {
    try {
        const sellers = await seller.find();
        res.status(200).json(sellers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.getSellerById = async (req, res) => {
    try {
        const { id } = req.params;
        const seller = await seller.findById(id);
        res.status(200).json(seller);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.updateSeller = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedSeller = await seller.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(updatedSeller);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.deleteSeller = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedSeller = await seller.findByIdAndDelete(id);
        res.status(200).json(deletedSeller);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }   
}