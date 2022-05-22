const express = require("express");
const bcrypt = require("bcrypt");


//Models
const UserModel = require("../../models/Users");

const Router = express.Router();

/*
Route     /signup
Des       Register new user
Params    none
Access    Public
Method    POST  
*/
const signUp = async(req, res) => {
    try {
        await UserModel.findByEmailAndPhone(req.body.credentials);        
        //Save to DataBase
        const newUser = await UserModel.create(req.body.credentials);
        //generate JWT auth token

        const token = newUser.generateJwtToken();
        
        return res.status(200).json({ token, message: "Signup success" });
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
}
/*
Route     /signin
Des       signin with email and password
Params    none
Access    Public
Method    POST
*/

const signIn = async(req, res) => {
    try {
        const user = await UserModel.findByEmailAndPassword(req.body.credentials);
        
        //generate JWT auth token
        const token = user.generateJwtToken();
        
        return res.status(200).json({ token, message: "Login in success" });

    } catch (error) {
        return res.status(500).json({error: error.message});
    }
}

/*
Route     /change-password
Des       change user password
Params    none
Access    Public
Method    POST
*/
const changePassword = async(req, res) => {
    try {
        const data  = await req.body.credentials;
        const bcryptSalt = await bcrypt.genSalt(8);
        const hashedPassword = await bcrypt.hash(data.password, bcryptSalt); 
        await UserModel.findOneAndUpdate(
            { _id: data.id },
            { $set: {password_hash: hashedPassword}}
            );

        return res.status(200).json({ message: "password changed successfully" });

    } catch (error) {
        return res.status(500).json({error: error.message});
    }
}

/*
Route     /check-email
Des       change user email in the database
Params    none
Access    Public
Method    POST
*/
const checkEmail = async(req, res) => {
    try {
        const data = await UserModel.findOne({email: req.body.email});
        console.log(data);
        if(!data) {
            return res.status(505).json({status: "error", message: "Email doesnt exist"});
        }
        return res.status(200).json({ message: "Email is available" });

    } catch (error) {
        return res.status(500).json({error: error.message});
    }
}


/*
Route     /google-auth
Des       signin/up with google
Params    none
Access    Public
Method    POST
*/

const googleAuth = async(req, res) => {
    try {        
       //Save to DataBase
       const newUser = await UserModel.create(req.body.credentials);
        //generate JWT auth token
        //const token = user.generateJwtToken();
        
        return res.status(200).json({ token, message: "Login in success with Google" });

    } catch (error) {
        return res.status(500).json({error: error.message});
    }
}

module.exports = { signIn, signUp, checkEmail, changePassword, googleAuth };