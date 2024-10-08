const Product = require("../models/productmodel");
const Category = require("../models/categorymodel");
const subcategory = require("../models/subcategorymodel");
exports.createProduct = async (req, res) => {
    try{
        const matchCategory=await Category.findById(req.body.category_id);
        if(!matchCategory){
            return res.status(400).json({
                success:false,
                message:"category not found"
            })
        }

        // const matchSubcategory=await subcategory.findById(req.body.subcategory_id);
        // if(!matchSubcategory){
        //     return res.status(400).json({
        //         success:false,
        //         message:"subcategory not found"
        //     })
        // }
      
        const {
            name,
            description,
            price,  
            images,
            rating,
            instock,
            brand,
            numReviews,
            category_id,
            subcategory_id,
            user_id,
            colors,
            sizes,
         
            

            
            
        } = req.body;
        const product = new Product({
            name,
            description,
            price,
            images,
            rating,
            instock,
            brand,
            numReviews,
            category_id,
            subcategory_id,
            user_id,
            colors,
            sizes,
            
       
            
        });
         const createdProduct = await product.save();
        res.status(201).json({
            success: true,
            data: createdProduct,
            message: "Product created successfully",
        });
    }catch(err){
        res.status(400).json({message: err.message});
    }
};

exports.addManyProducts=async(req,res )=>{
    try{
        const products = req.body;
        const createdProducts = await Product.insertMany(products);
        res.status(201).json({
            success: true,
            data: createdProducts,
            message: "Products created successfully",
        });
    }catch(err){
        res.status(400).json({message: err.message});
    }
}
  exports.getProduct= async (req, res) => {
    try{
        const id = req.params.id;
        const products = await Product.findById(id);
        res.json(products);
    }catch(err){
        res.status(500).json({message: err.message});
    }
  }


  exports.getAllProducts= async (req, res) => {
    try{
        const products = await Product.find().populate('category_id');
        res.status(200).json({
            success:true,
            data:products
        })
        

    }
    catch(error){
        console.log(error)
        res.status(500).json({
            success:false,
            message:error
        })
    }
 }

  exports.updateProducts= async (req, res) => {
    try{
        const {id}=req.params;
        const {name,description,price,images,rating,instock,brand,numReviews,countInStock,category_id,subcategory_id}=req.body;
        const product=await Product.findById(id);
        if(product){
            const updatedProduct=await Product.findByIdAndUpdate(id,{
                name:name,
                description:description,
                price:price,
                images:images,
                rating:rating,
                instock:instock,
                brand:brand,
                numReviews:numReviews,
                countInStock:countInStock,
                category_id:category_id,
                subcategory_id:subcategory_id
                
                
            })
            res.status(200).json({
                success:true,
                data:updatedProduct
            })
        }
        else{
            res.status(404).json({
                success:false,
                message:"No product found"
            })

        }
    }
        catch{
            res.status(500).json({
                success:false,
            })
        }
    }

     exports.deleteProducts= async (req, res) => {
        try{
            const {id}=req.params;
            const product=await Product.findById(id);
            if(product){
                const deletedProduct=await Product.findByIdAndDelete(id);
                res.status(200).json({
                    success:true,
                    data:deletedProduct
                })
            }
            else{
                res.status(404).json({
                    success:false,
                    message:"No product found"
                })
    
            }
        }
            catch{  
                res.status(500).json({
                    success:false,  
                })
            }
        }   

        exports.searchProduct = async (req, res) => {
            try {
                const { query } = req.params;
        
                // Use regular expression for partial, case-insensitive match
                const products = await Product.find({ name: { $regex: query, $options: 'i' } });
        
                if (products.length > 0) {
                    res.status(200).json({
                        success: true,
                        data: products
                    });
                } else {
                    res.status(404).json({
                        success: false,
                        message: "No product found"
                    });
                }
            } catch (error) {
                res.status(500).json({
                    success: false,
                    message: error.message
                });
            }
        };
        

         exports.newArrivals= async (req, res) => {
            try{
                const products = await Product.find().sort({createdAt: -1}).limit(19);
                res.status(200).json({
                    success:true,
                    data:products   
                })
            }
            catch(error){
             console.log("error",error);

                res.status(500).json(
                    {
                    success:false,
                    message:error
                })
            }
         }