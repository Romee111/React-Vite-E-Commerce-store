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
        const {subcategory_id}=req.params
        if(!subcategory_id){
            return res.status(400).json({
                success:false,
                message:"subcategory_id is required"
            })
        }
        const Category=await category.find({subcategory_id}).populate("subcategory_id");
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
        const {name}=req.body;
        const {subcategory_id}=req.body
    const Category=await category.findById(id);
    if(!Category){
        return res.status(404).json({
            success:false,
            message:"Category not found"
        })

    }
   
    const updateCategory=await category.findByIdAndUpdate(
        Category.id,
        subcategory_id,
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

 
 exports.getsubCategorytoCategory = async (req, res) => {
    try {
        const { id } = req.params;

        // Step 1: Fetch the category by its ID
        const foundCategory = await category.findById(id);

        // If the category does not exist
        if (!foundCategory) {
            return res.status(404).json({ success: false, message: 'Category not found' });
        }

        // Step 2: Fetch subcategories that match the category_id
        const subcategories = await subcategory.find({ category_id: id });

        // Step 3: Merge the category and its subcategories
        const result = {
            success: true,
            category: foundCategory, // Use the fetched category
            subcategories
        };

        // Respond with the merged result
        res.status(200).json(result);
    } catch (error) {
        console.error('Error fetching category and subcategories:', error); // Log error for debugging
        res.status(500).json({ success: false, message: error.message });
    }
};




