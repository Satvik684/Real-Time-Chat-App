const jwt = require("jsonwebtoken");

const generateToken = (userId,res)=>{
    const token = jwt.sign({userId},process.env.JWT_SECRET,{
        expiresIn:"7d",
    });//userId is payload

    res.cookie("jwt",token,{
        maxAge : 7 * 24 * 60 * 60 * 1000,//7days in milliseconds
        httpOnly:true,//prevent XSS attacks
        sameSite:"strict",
        secure: process.env.NODE_ENV !== "development",
    });

    return token;
}

module.exports = {generateToken};
