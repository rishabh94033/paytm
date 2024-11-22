const z = require("zod");
const jwtSecret = require("../config");

const jwt=require("jsonwebtoken")


function userauthMiddleware(req, res, next) {
  const body=req.headers.authorization;

  if(!body || !body.startsWith('Bearer ')){
    res.status(403).json({
        message:"invalid token"
    })
  }
  const token=body.split(' ')[1];
  
  try{
    // console.log("inside try");
    // console.log(token);
    
    const decoded= jwt.verify(token,jwtSecret)
    // console.log(decoded);
    
    
    if(req.body.userId==decoded.userId){
      // console.log("inside if");
      
        return next()
    }
    else{
       return res.status(404).json({
            message:"error1"
        })
    }
  }
  catch(err){
    console.log(err.name);
    
    console.log(err.message);
    
    return res.status(404).json({
        message:"error2"
    })
  }
}



module.exports = userauthMiddleware