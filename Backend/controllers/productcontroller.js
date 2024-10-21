const Product = require("../models/productmodel");
const Category = require("../models/categorymodel");
const subcategory = require("../models/subcategorymodel");
// exports.createProduct = async (req, res) => {
//     try{
//         const matchCategory=await Category.findById(req.body.category_id);
//         if(!matchCategory){
//             return res.status(400).json({
//                 success:false,
//                 message:"category not found"
//             })
//         }

//          const {
//             name,
//             description,
//             price,  
//             images,
//             rating,
//             instock,
//             brand,
//             numReviews,
//             category_id,
//             subcategory_id,
//             user_id,
//             colors,
//             sizes,
//           } = req.body;
//         const product = new Product({
//             name,
//             description,
//             price,
//             images,
//             rating,
//             instock,
//             brand,
//             numReviews,
//             category_id,
//             subcategory_id,
//             user_id,
//             colors,
//             sizes,
            
       
            
//         });
//          const createdProduct = await product.save();
//         res.status(201).json({
//             success: true,
//             data: createdProduct,
//             message: "Product created successfully",
//         });
//     }catch(err){
//         res.status(400).json({message: err.message});
//     }
// };
exports.createProduct = async (req, res) => {
    try {
           const seller_id = req.user._id;
        const matchCategory = await Category.findById(req.body.category_id);
        if (!matchCategory) {
            return res.status(400).json({
                success: false,
                message: "Category not found",
            });
        }

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

        // Create the product with the seller's ID
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
            createdBy: seller_id, 
        });

        const createdProduct = await product.save();
        res.status(201).json({
            success: true,
            data: createdProduct,
            message: "Product created successfully",
        });
    } catch (err) {
        res.status(400).json({
            success: false,
            message: err.message,
        });
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

 exports.getProductsBySeller = async (req, res) => {
    try {
        // Get the seller ID from the authenticated user (from the token)
        const sellerId = req.user._id;

        // Find products created by this seller
        const sellerProducts = await Product.find({ createdBy: sellerId });

        res.status(200).json({
            success: true,
            data: sellerProducts,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

exports.updateProducts = async (req, res) => {
    try {
        const { id } = req.params;  // Extract the product ID from request parameters
        const product = await Product.findById(id);  // Find the product by ID

        // Stage 1: Check if the product exists
        if (!product) {
            return res.status(404).json({
                success: false,
                message: "No product found.",
            });
        }

        // Stage 2: Check user authorization
        const userId = req.user._id.toString(); // Get the logged-in user's ID

        if (isAdmin(req.user)) {
            const updatedProduct = await Product.findByIdAndUpdate(id, req.body, { new: true }); // Return the updated document

            return res.status(200).json({   
                success: true,
                data: updatedProduct,
            });

            
        } else if (isSeller(req.user)) {
            if (product.createdBy.toString() === userId) {
                const updatedProduct = await Product.findByIdAndUpdate(id, req.body, { new: true }); // Return the updated document
                return res.status(200).json({
                    success: true,
                    data: updatedProduct,
                });
            }

           
            if (product.createdBy.toString() !== userId) {
                return res.status(403).json({
                    success: false,
                    message: "You are not authorized to update this product.",
                });
            }
        } else {
            // If the user is neither admin nor seller
            return res.status(403).json({
                success: false,
                message: "You do not have permission to update products.",
            });
        }

        // Stage 3: Update the product with the entire request body
        const updatedProduct = await Product.findByIdAndUpdate(id, req.body, { new: true }); // Return the updated document

        return res.status(200).json({
            success: true,
            data: updatedProduct,
        });

    } catch (error) {
        console.log("Error updating product:", error); // Log the error for debugging
        return res.status(500).json({
            success: false,
            message: "Server error while updating product.",
        });
    }
};




//   exports.updateProducts= async (req, res) => {
//     try{
//         const {id}=req.params;
//         const {name,description,price,images,rating,instock,brand,numReviews,countInStock,category_id,subcategory_id}=req.body;
//         const product=await Product.findById(id);
//         if(product){
//             const updatedProduct=await Product.findByIdAndUpdate(id,{
//                 name:name,
//                 description:description,
//                 price:price,
//                 images:images,
//                 rating:rating,
//                 instock:instock,
//                 brand:brand,
//                 numReviews:numReviews,
//                 countInStock:countInStock,
//                 category_id:category_id,
//                 subcategory_id:subcategory_id
                
                
//             })
//             res.status(200).json({
//                 success:true,
//                 data:updatedProduct
//             })
//         }
//         else{
//             res.status(404).json({
//                 success:false,
//                 message:"No product found"
//             })

//         }
//     }
//         catch{
//             res.status(500).json({
//                 success:false,
//             })
//         }
//     }
    exports.deleteProducts = async (req, res) => {
        try {
            const { id } = req.params; 
            const product = await Product.findById(id); 
    
            if (product) { 
                if (isAdmin(req.user)) { 
                    const deletedProduct = await Product.findByIdAndDelete(id); 
                    res.status(200).json({
                        success: true,
                        data: deletedProduct 
                    });
                } else if (isSeller(req.user)) { 
                    if (product.createdBy.toString() === req.user._id.toString()) {
                        const deletedProduct = await Product.findByIdAndDelete(id); 
                        res.status(200).json({
                            success: true,
                            data: deletedProduct 
                        });
                    } else {
                      
                        res.status(401).json({
                            success: false,
                            message: "You are not authorized to delete this product"
                        });
                    }
                } else {
                 
                    res.status(401).json({
                        success: false,
                        message: "You are not authorized to delete this product"
                    });
                }
            } else {
                
                res.status(404).json({
                    success: false,
                    message: "Product not found"
                });
            }
        } catch (error) {  
             res.status(500).json({
                success: false,
                message: "Server error"
            });
        }
    };
    

    //  exports.deleteProducts= async (req, res) => {
    //     try{
    //         const {id}=req.params;
    //         const product=await Product.findById(id);

    //         if(product){
    //             if(isAdmiin(req.user)){
    //                 const deletedProduct=await Product.findByIdAndDelete(id);
    //                 res.status(200).json({
    //                     success:true,
    //                     data:deletedProduct
    //                 })

    //             }
    //             else if( isseller(req.user)){
    //                 if(product.createdBy.toString()===req.user._id.toString()){
    //                     const deletedProduct=await Product.findByIdAndDelete(id);
    //                     res.status(200).json({
    //                         success:true,
    //                         data:deletedProduct
    //                     })
    //                 }
               
                
              
    //         }
    //         else{
    //             res.status(401).json({
    //                 success:false,
    //                 message:"You are not authorized to delete this product"
    //             })
    //         }
    //     }}
    //         catch{  
    //             res.status(500).json({
    //                 success:false,  
    //             })
    //         }
    //     }   
    
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