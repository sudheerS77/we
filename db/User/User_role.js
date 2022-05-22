const mongoose=require("mongoose")

const userroleSchema=new mongoose.Schema({
    user_id:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"User",
    },
    role_id:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"Role",
    }
})
module.exports=mongoose.model("User_role",userroleSchema);