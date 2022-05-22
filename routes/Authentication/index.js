const express = require("express");
const router =  express.Router();

const { signUp, signIn, changePassword, checkEmail, googleAuth } = require("../../controllers/Authentication/index");

router.post("/signup", signUp);
router.post("/signin", signIn);
router.post("/google-auth", googleAuth);
router.post("/change-password", changePassword);
router.post("/check-email", checkEmail);


module.exports = router;
