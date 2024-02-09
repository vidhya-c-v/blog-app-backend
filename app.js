const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const userRouter=require("./controllers/userRouter")
const app=express()
app.use(express.json())
app.use(cors())
mongoose.connect("mongodb+srv://vidhya_14:vidhya_14@cluster0.u7pxfo8.mongodb.net/blogDb?retryWrites=true&w=majority",
{useNewUrlParser:true})
app.use("/api/blog",userRouter)
app.listen(3001,()=>{
    console.log("server running")
})
