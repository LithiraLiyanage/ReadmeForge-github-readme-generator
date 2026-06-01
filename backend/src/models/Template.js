const mongoose=require("mongoose");
const schema=new mongoose.Schema({name:{type:String,required:true},description:String,category:String,styleOption:String,preview:String,structure:Object,isDefault:{type:Boolean,default:true}},{timestamps:true});
module.exports=mongoose.model("Template",schema);
