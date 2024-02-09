const express=require("express")
const postModel=require("../models/postModel")
const router=express.Router()

router.post("/add",async(req,res)=>{
    let data=req.body
    let post=new postModel(data)
    let result=await post.save()
    res.json({
        status:"success"
    })
})
router.get("/viewall",async(req,res)=>{
    let result=await postModel.find()
    .populate("userId","name age mobile address pin -_id")//mention only required field,userid is not displayed
    .exec()
    res.json(result)
})

module.exports=router