const mongoose=require("mongoose");

const masterNutrientSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    createdBy:{
        type:String
    },
    updatedBy:{
        type:String
    }
},{timestamps:{createdAt:"createdDateTime",updatedAt:"updatedDateTime"}});

module.exports=mongoose.model("MasterNutrient",masterNutrientSchema);

