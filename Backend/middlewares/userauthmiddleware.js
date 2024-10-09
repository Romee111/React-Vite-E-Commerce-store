const jwt=require('jsonwebtoken')
exports.isLogin=async(req,res)=>{
  try{
    const token=req.body.token;
    if(!token){
        res.status(403).end("forbidden response")
    }
       const validate= jwt.verify(token,process.env.JWT_SECRET)
     if(!validate){
         res.status(403).end("forbidden response")
     }
     else{
         next()
     }
 
  }
  catch(err){
      console.log(err)
  }
}

exports.isForget=async(req,res,next)=>{
    try{
        const token=req.body.token;
        if(!token){
            res.status(403).end("forbidden response")
        }
    
           const validate= jwt.verify(token,process.env.JWT_SECRET)
         if(!validate){
             res.status(403).end("forbidden response")
         }
         else{
             next()
         }
     
      }
      catch(err){
          console.log(err)
      }
  }

   exports.isReset=async(req,res,next)=>{
    try{
        const token=req.body.token;
        if(!token){
            res.status(403).end("forbidden response")
        }
           const validate=await jwt.verify(token,process.env.JWT_SECRET)
         if(!validate){
             res.status(403).end("forbidden response")
         }
         else{
             next()
         }
     
      }

      catch(err){
          console.log(err)
      }
    }
    // exports.isauthorized=async(req,res,next)=>{
    //     const token=req.headers.authorization//.split(' ')[1];
    //     console.log(token);
    //     if(!token){
    //         res.status(403).end("forbidden response")
    //     }   
    //     const isauthorized=await jwt.decode(token,process.env.JWT_SECRET)
    //     console.log(isauthorized);
    //     if(!isauthorized){
    //         res.status(403).end("forbidden response")
    //     }
    //     else if(isauthorized.isAdmin || isauthorized.isShipper || isauthorized.user_id===req.params.id){

    //         next()
    //     }
    //     else{
    //         res.status(403).end("forbidden response")
    //     }
    // }

    exports.isauthorized = async (req, res, next) => {
        try {
            const token = req.headers.authorization; // Retrieve token from header
            console.log("Authorization Token: ", token);
    
            if (!token) {
                return res.status(403).json({ message: "Forbidden: No token provided" });
            }
    
            // Decode the token
            const isauthorized = jwt.verify(token, process.env.JWT_SECRET);
            console.log("Decoded Token: ", isauthorized);
    
            if (!isauthorized) {
                return res.status(403).json({ message: "Forbidden: Invalid token" });
            }
    
            // Allow access if user is admin, shipper, or if user_id matches request params
            if (isauthorized.isAdmin || isauthorized.isShipper || isauthorized.user_id === req.params.id) {
                next();
            } else {
                return res.status(403).json({ message: "Forbidden: Access denied" });
            }
        } catch (err) {
            console.log("Authorization error: ", err);
            res.status(500).json({ message: "Server error during authorization" });
        }
    };
    