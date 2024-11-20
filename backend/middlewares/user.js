const z = require("zod");
const jwtSecret = require("../config");


function userauthMiddleware(req, res, next) {
  const body=req.body.authorization;

  if(!body || !body.startsWith('Bearer ')){
    res.status(403).json({
        message:"invalid token"
    })
  }
  const token=body.split(' ')[1];

  try{
    const decoded= jwt.verify(token,jwtSecret)

    if(req.body.username==decoded.username){
        next()
    }
    else{
        res.status(404).json({
            message:err
        })
    }
  }
  catch(err){
    res.status(404).json({
        message:err
    })
  }
}

module.exports = userauthMiddleware