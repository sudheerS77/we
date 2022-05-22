const mongoose=require("mongoose");

const grocerySchema=new mongoose.Schema({
    name:{
        type:String,
        required:true    
    },
    createdBy:{
        type:String,
    },
    updatedBy:{
        type:String,
    },
    groceryFood:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"GroceryFood",
    },
    userGroceries:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"UserGrocery"
    }
},{timestamps:{createdAt:"createdDateTime",updatedAt:"updatedDateTime"}});

module.exports=mongoose.model("Grocery",grocerySchema);