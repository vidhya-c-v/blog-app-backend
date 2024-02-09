const mongoose=require("mongoose")
const postSchema=new mongoose.Schema(
    {
        userId:{
            type:mongoose.Schema.Types.ObjectId,
            required:true,
            ref:"user" //userid link with objectid in user collection
        },
        post:{
            type:String,
            required:true
        },
        postedDate:{
            type:Date,
            default:Date.now //current date automatically insert
        }
        
    }
) 
module.exports=mongoose.model("blogPost",postSchema) //blogpost is collecetion