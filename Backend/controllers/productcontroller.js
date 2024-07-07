const Product = require("../models/productmodel");
const Category = require("../models/categorymodel");
exports.createProduct = async (req, res) => {
    try{
        const matchCategory=await Category.findById(req.body.category_id);
        if(!matchCategory){
            return res.status(400).json({
                success:false,
                message:"category not found"
            })
        }
      
        const {
            name,
            description,
            price,  
            image,
            rating,
            instock,
            brand,
            numReviews,
            category_id,
            user_id,

            
            
        } = req.body;
        const product = new Product({
            name,
            description,
            price,
            image,
            rating,
            instock,
            brand,
            numReviews,
            category_id,
            user_id,
            
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

  exports.getproduct= async (req, res) => {
    try{
        const id = req.params.id;
        const products = await Product.findOne( id);
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
        const {name,description,price,image,rating,instock,brand,numReviews,countInStock,}=req.body;
        const product=await Product.findById(id);
        if(product){
            const updatedProduct=await Product.findByIdAndUpdate(id,{
                name:name,
                description:description,
                price:price,
                image:image,
                rating:rating,
                instock:instock,
                brand:brand,
                numReviews:numReviews,
                countInStock:countInStock,
                
                
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

         exports.searchProduct= async (req, res) => {
            try{
                const {query}=req.params;
                const products=await Product.find({name:query});
                if(products!==null){
                    res.status(200).json({
                        success:true,
                        data:products
                    })
                }
                else{
                    res.status(404).json({
                        success:false,
                        message:"No product found"
                    })
                }
            }
            catch(error){
                res.status(500).json({
                    success:false,
                    message:error
                })
            }
         }


         exports.newArrivals= async (req, res) => {
            try{
                const products = await Product.find().sort({createdAt: -1}).limit(15);
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