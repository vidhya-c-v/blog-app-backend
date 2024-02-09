const express=require("express")
const router=express.Router()
const userModel=require("../models/userModel")

router.post("/signin",async(req,res)=>{
    let data=req.body
    let user=new userModel(data)
    let result=await user.save()
    res.json({
        status:"success"
    })
})
module.exports=router