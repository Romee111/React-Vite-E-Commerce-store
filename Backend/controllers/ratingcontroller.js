const rating = require("../models/ratingmodel");

exports.addrating = async (req, res) => {
         try{
                 const {product_id,user_id,rating}=req.body;
                 
         const existingrating = await rating.findOne({product_id,user_id});
         if(existingrating) return res.status(400).json({message:"rating already added"});
         newrating.save();

                 const newrating = new rating({
                         product_id,
                         user_id,
                         rating
         }    
         );
         if (rating < 1 || rating > 5) {
            return res.status(400).json({ message: 'Rating must be between 1 and 5' });
          }
          
         const savedrating = await newrating.save();
         res.status(200).json(savedrating);

          const  Product=await Product.findById(product_id);
             if(!Product){
                 return res.status(400).json({message:"product not found"});
                 } 
            
           const totalrating=Product.rating+rating;
           const count=Product.numReviews+1;
           const averageRating=totalrating/count;
           await Product.findByIdAndUpdate(product_id,{$set:{rating:averageRating,numReviews:count}});
                    
             

         }catch(err){
                 res.status(500).json(err);
         }
}

exports.deleterating = async (req, res) => {
         try{
                 const {id}=req.params;
                 const deletedrating = await rating.findByIdAndDelete(id);
                 res.status(200).json(deletedrating);
         }catch(err){
                 res.status(500).json(err);
         }
}

exports.getRatings = async (req, res) => {
         try{
                 const ratings = await rating.find().populate('user_id', 'name').populate('product_id', 'name');
                 res.status(200).json(ratings);
         }catch(err){
                 res.status(500).json(err);
         }
}

 exports.getRatingsById = async (req, res) => {
         try{
                 const {id}=req.params;
                 const ratings = await rating.findById(id).populate('user_id', 'name').populate('product_id', 'name');
                 res.status(200).json(ratings);
         }catch(err){
                 res.status(500).json(err);
         }
}