import { secreteKey } from "../constant.js";
import jwt from "jsonwebtoken";

let isAuthenticated=async(req,res,next)=>{
    //get token from postman
    let tokenString=req.headers.authorization
    console.log(tokenString)
  try {
      let tokenArray=tokenString.split(" ");
      let token=tokenArray[1];
    console.log(tokenArray)
    
    //verify token 
    let  user=jwt.verify(token,secreteKey );
    req.id=user.id
    next()  
  } catch (error) {
    res.json({
      success:false,
      message:"token not valid"
    })
  }
  }

  export default isAuthenticated;