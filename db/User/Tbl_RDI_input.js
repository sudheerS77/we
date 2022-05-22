const mongoose=require("mongoose")

const tblrdiinput=new mongoose.Schema({
    user_id:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"User",
    },
    calories:{
        type:Number,
        required:false,
    },
    physical_activity:{
        type:String,//once check it 
        required:false,
    },
    allergies:{
        type:String,//once check it 
        required:false,
    },
    dietary_preferences:{
        type:String,
        required:false,
    },
    created_by:{
        type:String,
        required:false,
    },
    updated_by:{
        type:String,
        required:false,
    },
},
{timestamps :{createdAt:"createdDateTime",updatedAt:"updatedDateTime"}});
module.exports=mongoose.model("Tbl_RDI_input",tblrdiinputSchema);
