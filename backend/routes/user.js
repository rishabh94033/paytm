const express=require("express");
const { User } = require("../db");
const userRouter=express.router()

userRouter.post("/signup", userauth,async(req,res)=>{
    const username= req.body.username;
    const firstName= req.body.firstName;
    const lastname= req.body.lastname;
    const password= req.body.password;
    
    User.create({
        username:username,
        firstName:firstName,
        lastname:lastname,
        password:password
    })

    res.status(200).json({
        message:"user successfully added"
    })
})


module.exports=userrouter;


