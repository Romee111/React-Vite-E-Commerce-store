const  seller= require("../models/sellersmodel");

exports.createSeller=async (req, res)=> {
    try {   
        const { name, email, password, phone, sellersAddress, image, ID_CardNumber,  ID_image1, ID_image2, Business_Name, Business_Address, Business_Type,  Business_registerationNumber,Tax_IDNumber, Bank_Name, Bank_AccountNumber,Bank_Branch,Account_HolderName,Branch_Code  } = req.body;
        const newSellers = new seller({
            name,
            email,
            password,
            phone,
            sellersAddress,
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
            Branch_Code
        });

        await newSellers.save();
        res.status(201).json(
            {
                success: true,
            data: newSellers,
            message: "Sellers created successfully"
            }
        );
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}