const mongoose =require("mongoose");

const foodSchema = new mongoose.Schema({
    foodName:{
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

module.exports=mongoose.model("Food",foodSchema);



