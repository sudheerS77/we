const mongoose=require("mongoose");

const foodNutrientSchema=new mongoose.Schema({
    foodId:{
        type:mongoose.SchemaTypes.ObjectId, 
        ref:"Food"
    },
    NutrientId:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"Nutrient"
    },
    measuringStandard:{
        type:String
    },
    gramsperCup:{
        type:Number,
        required:true
    },
    unitWeight:{    
        type:Number
    }
});

module.exports=mongoose.model("FoodNutrient",foodNutrientSchema);