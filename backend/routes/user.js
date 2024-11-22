const express=require("express");
const { User, Account } = require("../db");
const userRouter=express.Router()
const jwt=require("jsonwebtoken");
const jwtSecret = require("../config");
const z = require("zod");
const userauthMiddleware = require("../middlewares/user");


const userSchema = z.object({
    username: z.string().email(),
    firstName: z.string(),
    lastname: z.string(),
    password: z.string().min(8)
})
userRouter.post("/signup" ,async(req,res)=>{
    const username= req.body.username;
    const firstName= req.body.firstName;
    const lastname= req.body.lastname;
    const password= req.body.password;

    const userparse = userSchema.safeParse({
        username: username,
        firstName: firstName,
        lastname: lastname,
        password: password
    })
    if(!userparse){
        res.status(404).json({
            message:"invalid format"
        })
    }
    const user= await User.findOne({
        username:req.body.username
    })
    if(user){
        return res.status(404).json({
            message:"User exist"
        })
    }
    
    const dbuser= await User.create({
        username:username,
        firstName:firstName,
        lastname:lastname,
        password:password,
    })
const userId=dbuser._id
    await Account.create({
        userId,
        balance: 1 + Math.random() * 10000
    })
    const token= jwt.sign({
        userId
    },jwtSecret)
    return res.status(200).json({
        message:"user successfully added",
        token:token
    })
})

userRouter.post("/signin", userauthMiddleware, async(req,res)=>{
    const username= req.body.username;
    const password= req.body.password;

    const useres= User.findOne({
        username:username,
        password:password
    })

    if(!useres){
        res.status(404).json({
            message:"error while logging in"
        })
    }

    res.status(200).json({
        message:"sign in sucessfully"
    })
})

const updteduserSchema = z.object({
    username: z.string().email().optional(),
    firstName: z.string().optional(),
    lastname: z.string().optional(),
    password: z.string().min(8).optional()
})
userRouter.put("/", userauthMiddleware, async(req,res)=>{
    const newbody=req.body;
    const response= updteduserSchema.safeParse(newbody)
    if(!response){
        res.status(403).json({
            message:"error ehile updatiing the information"
        })
    const updteduser= User.updateOne(newbody,{
        _id: req.body.id
    })
    }

    res.status(200).json({
        message:"Information updated sucessfully"
    })


})


userRouter.get("/bulk", async (req, res) => {
    const filter = req.query.filter || "";

    const users = await User.find({
        $or: [{
            firstName: {
                "$regex": filter
            }
        }, {
            lastName: {
                "$regex": filter
            }
        }]
    })

    res.json({
        user: users.map(user => ({
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastname,
            _id: user._id
        }))
    })
})


module.exports=userRouter;


