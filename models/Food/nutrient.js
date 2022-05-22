const mongoose=require("mongoose");

const nutrientSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    masterNutrientId:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"MasterNutrient"
    },
    createdBy:{
        type:String
    },
    updatedBy:{
        type:String
    }
},{timestamps:{createdAt:"createdDateTime",updatedAt:"updatedDateTime"}});

module.exports=mongoose.model("Nutrient",nutrientSchema);