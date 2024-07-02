const subcategory = require("../models/subcategorymodel");
const category = require("../models/categorymodel");

exports.addsubcategory = async (req, res) => {
    try {
        const { name,category_id } = req.body;
        const newsubCategory =await subcategory.create({
            name,  
            category_id 
            
        })

        await newsubCategory.save();
        res.status(201).json(newsubCategory);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.getsubcategory = async (req, res) => {
    try {
        const { id } = req.params.id;
        const subCategory = await subcategory.findOne(id);
        res.status(200).json(subCategory);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.getallsubcategory = async (req, res) => {
    try {
        const {category_id} = req.params
        const subCategory = await subcategory.find({category_id:category_id}).populate("category_id");
        res.status(200).json(subCategory);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

}

 exports.updatesubcategory = async (req, res) => {
    try {
        const { id } = req.params;
        const { name } = req.body;
        
        const subCategory = await subcategory.findByIdAndUpdate(id, {
         name
        });
        res.status(200).json(subCategory);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.deletesubcategory = async (req, res) => {
    try {
        const { id } = req.params;
        const subCategory = await subcategory.findByIdAndDelete(id);
        res.status(200).json(subCategory);  
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}