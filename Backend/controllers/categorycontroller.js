const category=require("../models/categorymodel")
const subcategory=require("../models/subcategorymodel")
exports.createCategory = async (req, res) => {
    try {
        const { name,subcategory_id} = req.body;
        const Category = await category.create({
            name,
            subcategory_id,
          
        });
        res.status(201).json({
            success: true,
            Category
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
}

 exports.getCategory=async(req,res)=>{
    try {
        const {id}=req.params
        const Category=await category.findOne({_id:id});
        res.status(200).json({
            success:true,
            Category
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
 }

  exports.getallCategory=async(req,res)=>{
    try {
        const Category=await category.find().populate("subcategory_id");
        res.status(200).json({
            success:true,
            Category
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
 }

  exports.updateCategory=async(req,res)=>{
    try {
        const {id}=req.params;
        const {name}=req.body
    const Category=await category.findById(id);
    if(!Category){
        return res.status(404).json({
            success:false,
            message:"Category not found"
        })

    }
   
    const updateCategory=await category.findByIdAndUpdate(
        Category.id,
        {name},
        {new:true}
        
    )
      return   res.status(200).json({
            success:true,
            updateCategory
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
 }


 exports.deleteCategory=async(req,res)=>{
    try {
        const {id}=req.params
        const Category=await category.findByIdAndDelete(id);
        res.status(200).json({
            success:true,
            Category
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
 }