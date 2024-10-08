const subcategory = require("../models/subcategorymodel");
const category = require("../models/categorymodel");

exports.addsubcategory = async (req, res) => {
    try {
        const { name,category_id,image } = req.body;
        const newsubCategory =await subcategory.create({
            name,  
            category_id ,
            image,
            
            
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

exports.getallsubCategory = async (req, res) => {
    try {
        const { category_id } = req.params;
    
        if (!category_id) {
            return res.status(400).json({ message: 'Category ID is required' });
        }
    
        const subCategory = await subcategory.find({ category_id }).populate('category_id');
    
        if (!subCategory) {
            return res.status(404).json({ message: 'Subcategory not found' });
        }
    
        res.status(200).json(subCategory);
    } catch (error) {
        console.error('Error fetching subcategories:', error); // Log the error for debugging
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
    

}
 exports.getAllSub= async(req,res)=>{
    try {
        const subCategory = await subcategory.find();
        res.status(200).json(subCategory);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
 }

 exports.updatesubcategory = async (req, res) => {
    try {
        const { id } = req.params;
        const { name } = req.body;
        const {image}=req.body
        
        const subCategory = await subcategory.findByIdAndUpdate(id, {
         name,
         image
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