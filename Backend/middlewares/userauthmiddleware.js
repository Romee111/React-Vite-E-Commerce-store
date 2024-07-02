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
    exports.isauthorized=async(req,res,next)=>{
        const token=req.headers.authorization.split(' ')[1];
        console.log(token);
        if(!token){
            res.status(403).end("forbidden response")
        }   
        const isauthorized=await jwt.decode(token,process.env.JWT_SECRET)
        console.log(isauthorized);
        if(!isauthorized){
            res.status(403).end("forbidden response")
        }
        else if(isauthorized.isAdmin || isauthorized.isShipper){

            next()
        }
        else{
            res.status(403).end("forbidden response")
        }
    }