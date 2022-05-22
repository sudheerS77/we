const mongoose=require("mongoose");

const groceryFoodSchema=new mongoose.Schema({
    foodId:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"Food"
    },
    groceryId:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"Groceries"
    }
});

module.exports=mongoose.model("GroceryFood",groceryFoodSchema);