const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const UserSchema=new mongoose.Schema(
    {
    firstName:{
        type:String,
        required:[true,"Specify a valid first name"],
        minlength:3,
        maxlength:15
    },
    lastName:{
        type:String,
        required:false,
        minlength:3,
        maxlength:15
    },
    phone:{
        type:String,
        required:[true,"User phone number required"]
    },
    city:{
        type:String,
        required:false,
    },
    state:{
        type:String,
        required:false,
    },
    pincode:{
        type:String,
        required:false
    },
    email:{
        type:String,
        required:[true,"Specify a valid Email"],
        lowercase:true,
    },
    password_hash:{
        type:String,
        required:false,
    },
    created_by:{
        type:String,
        required:false,
    },
    accessed_failed_count:{
        type:Number,
        required:false,
    },
    is_locked_out:{
        type:Boolean,
        required:false,
    },
    lockout_end_date:{
        type:Date,
        required:false,
    },
    profile_pic_url:{
        type:String,
        required:false,
    },
    is_active:{
        type:Boolean,
        required:false,
    },
    },
    {
        timestamps :true
    }
);

UserSchema.statics.findByEmailAndPhone = async ({email, phone}) => {
    //check whether the email exist
    const checkUserByEmail = await UserModel.findOne({ email });
    //check whether the phoneNUmber exist
    const checkUserByPhone = await UserModel.findOne({ phone });    

    if(checkUserByEmail || checkUserByPhone) {
        throw new Error("User Already Exist ....");
    }
    
    return false;
};

UserSchema.statics.findByEmailAndPassword = async ({ email, password_hash }) => {
  
    //check whether email exist
   const user = await UserModel.findOne({ email });
   if(!user) throw Error("User does not exist");
 
   //Compare the passsword
   const passwordMatch = await bcrypt.compare(password_hash, user.password_hash);
 
   if(!passwordMatch) {
     //failed_count+=1;
     throw new Error("Invalid password")
   }
   return user;
 }


 UserSchema.pre("save", function(next) {
    const user = this;

    if(!user.isModified("password_hash")) return next();

    //generate salt
    bcrypt.genSalt(8, (error, salt) => {
      if(error) return next(error)
      //hash the password
      bcrypt.hash(user.password_hash, salt, (error, hash) => {
        if(error) return next(error)
        user.password_hash = hash;
        return next();
      })
    })

});


UserSchema.methods.generateJwtToken = function() {
    return jwt.sign({ user: this._id.toString() }, "Auth");
  };


var UserModel = mongoose.model("User",UserSchema);

module.exports = UserModel;