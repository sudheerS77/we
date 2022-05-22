const mongoose=require("mongoose")

const usermealactivitySchema=new mongoose.Schema({
    user_id:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"User",
    },
    pre_breakfast:{
        type:String,
        required:false,
    },
    breakfast:{
        type:String,
        required:false,
    },
    lunch:{
        type:String,
        required:false,
    },
    snacks:{
        type:String,
        required:false,
    },
    supper:{
        type:String,
        required:false,
    },
    physical_activity:{
        type:String,
        required:false,
    },
    sleep_per_week:{
        type:Number,
        required:true,
    },
    activity_level:{
        type:String,
        required:false,
    },
    activity_description:{
        type:String,
        required:false,
    },
    preferred_activity:{
        type:String,
        required:false,
    },
    exercise_frequency:{
        type:Number,
        required:false,
    },
    dietary_preference:{
        type:String,
        required:false,
    },
    allergies:{
        type:Array,//once check this, if it is an array or string
        required:false,
    },
    appetite_description:{
        type:String,
        required:false,
    },
    eatout_frequency:{
        type:Number,//here, I stopped writing required, if in case, you can add
    },
    water_consumption:{
        type:Number,
    },
})
module.exports=mongoose.model("User_Meal_Activity",usermealactivitySchema);