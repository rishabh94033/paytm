const accountRouter= express.router();
const express=require("express");
const { Account } = require("../db");

accountRouter.get("/balance", async(req,res)=>{
    const account= await Account.findOne({
        userId:req.body.userId
    })

    res.status(200).json({
        message:"balance is "+ account.balance
    })
})


accountRouter.post("/transfer", async(req,rea)=>{
const session = await mongoose.startSession();
const amount= req.body.amount;
const to= req.body.to;

const account= await Account.findOne({userId:req.body.userId}).session(session);
session.startTransaction();
try{

    if(!account || amount>account.balance){
        await session.abortTransaction();
        session.endSession();
        return res.status(404).json({
            message:"Insuffcient balance"
        })
    }

    const toAccount = await Account.updateOne(
        { userId: to },
        { $inc: { balance: -amount } }
    ).session(session);
    

    if (!toAccount) {
        await session.abortTransaction();
        session.endSession();
        return res.status(404).json({
            message: "Recipient account not found",
        });
    }
    
    const fromAccount = await Account.updateOne(
        { userId: req.body.userId },
        { $inc: { balance: -amount } }
    ).session(session);
    
    await session.commitTransaction();
    return res.status(200).json({
        message:"Transfer successful"
    })
    
}
catch(err){
    await session.abortTransaction();
        session.endSession();
    return res.status(404).json({
        message: "error occured during transfer"
    })
}
});


module.exports=accountRouter;