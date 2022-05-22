const mongoose=require("mongoose")

const loginproviderschema = new mongoose.Schema({
    user_id:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"User",
    },
    provider_key:{
        type:String,
        required:false,
    },
    provider_name:{
        type:String,
        required:false,
    }
})
module.exports=mongoose.model("Login_Provider",loginproviderSchema);