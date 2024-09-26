import expressAsyncHandler from "express-async-handler";
import { WebUser } from "../schema/model.js";
import { sendMail } from "../utils/sendMail.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { secreteKey } from "../constant.js";

export const crateWebUserController = async (req, res, next) => {


  try {
    let data = req.body;

    let hashPassword = await bcrypt.hash(data.password, 10);
    data = {
      ...data,
      isVerifiedEmail: false,
      password: hashPassword,
    };

    // Fix the typo here
    let result = await WebUser.create(data);

    //generate token 

 let info={
    id:result,
};

let secretKey="dw19";

let expiryInfo={
    expiresIn:"365d",
};

let myToken=jwt.sign(info,secreteKey,expiryInfo);
console.log(myToken)
 


    // Send mail
    await sendMail({
      from: "'House-ofJob'<reenaroy190456@gmail.com>",
      to: [data.email],
      subject: "Account Created",
      html: `<h1>Your account has been created successfully</h1>
        <a href="http://localhost:3000/reset-password-email?token=${  myToken}">
        http://localhost:3000/reset-password-email?token=${myToken}</a>`,
    });

    res.status(201).json({
      success: true,
      message: "User created successfully",
      data: result,
    });
  } catch (error) {
    res.status(201).json({
      message: error.message,
    });
  }
};

export const verifyEmail=async(req,res,next)=>{
  
  try {
    let tokenString=req.headers.authorization;
  let tokenArray=tokenString.split(" ");
  let token=tokenArray[1];
console.log(token)
//  console.log(tokenString.split(" ")[1]);

 //reset-password token

 let  myInfo=jwt.reset-password(token,secreteKey);
 let userId=myInfo.id;
 console.log(userId)

 let result = await WebUser.findByIdAndUpdate(userId,{
  isVerifiedEmail:true,
},
  {
    new: true,
  })
  res.status(201).json({
    success: true,
    message: "User verified successfully",
  });

    
  } catch (error) {
    res.status(401).json({
      message: error.message,
    });
  }
};

export  const loginUser=async(req,res,next)=>{
  try {
    let email=req.body.email;
    let password=req.body.password;

    let user=await WebUser.findOne({email:email})
    console.log(user)


    if (user){
      if(user.isVerifiedEmail){
        
        
 let isValidPassword=await bcrypt.compare(password,user.password,);
    console.log(isValidPassword)
    if(isValidPassword){
      let info={
        id:user.id
    };
    
    let expiryInfo={
        expiresIn:"365d",
    };
    
    let myToken=jwt.sign(info,secreteKey,expiryInfo);
    console.log(myToken)
    res.status(201).json({
      success:true,
      message:"user login successfully",
      data:user,
      token:myToken
    })
     
    }else{
      let error = new Error ("credential  does not match")
        throw error;
    }
      }else{
        let error = new Error ("credential  does not match")
        throw error;
      }

    }else{
     let error = new Error ("credential does not match")
     throw error;
    }

  } catch (error) {
    res.status(201).json({
      message: error.message,
    });
  }
};


export const myProfile = async(req,res,next)=>{
try {
  let id=req.id
  let result = await  WebUser.findById(id);
  res.status(200).json({
    success:true,
    message:"profile read successfully",
    data:result,
  })
} catch (error) {
  res.status(400).json({
    success:false,
    message:"unable to read profile"
  });
}
};

export const updateProfile=async(req,res,next)=>{
  try {
    let id=req.id;
    let data=req.body;
    //delete
    delete data.email;
    delete data.password;
    let result=await WebUser.findByIdAndUpdate(id, data,{New:true});

    res.status(201).json({
      success:true,
      message:"profile updated successfully",
      data:result,
    })
  } catch (error) {
    res.status(400).json({
      success:false,
      message:error.message,
    })
  }
};

export const updatePassword=async(req,res,next)=>{
  try {
    let id =req.id;
    let oldPassword=req.body.oldPassword;
    let newPassword=req.body.newPassword;


    let data=await WebUser.findById(id);
    let hashPassword=data.password
    let isValidPassword=await bcrypt.compare(oldPassword,hashPassword)
    if(isValidPassword){
      let newHashPassword =await bcrypt.hash(newPassword,10)

      let result =  await WebUser.findByIdAndUpdate(id,
        {password:newHashPassword},
        {new:true},)
      
      res.status(201).json({
        success:true,
        message:" password updated  successfully",
        data:result,
      })

    }else{
      let error=new Error("credential does not match")
      throw error;
    }
    console.log(data)
  } catch (error) {
    res.status(400).json({
      success:false,
      message:error.message,
    })
  }
};

export const readAllUser=async(req,res,next)=>{
try {
   let result= await WebUser.find({});

   res.status(200).json({
    success:true,
    message:"All user read successfully",
    data:result,
   });

} catch (error) {
  res.status(400).json({
    success:error.message,
    message:error.message,
  });
}
};


export const readAllSpecificUser=async(req,res,next)=>{
  try {
    let id =req.params.id ;
    let result =await WebUser.findById(id);
    res.status(200).json({success:true,
      message:"user read successfully",
    data:result,
  });
    
  } catch (error) {
    res.status(201).json({
      success:error.message,
      message:error.message,
    });
  }
  };

 export const updateSpecificUser=async(req,res,next)=>{
    try {
     let id =req.params.id ;
     let data=req.data;
     delete data.email;
     delete data.password;
     let result =await WebUser.findByIdAndUpdate(id,data,{new:true,});
      res.status(201).json({
       success:true,
       message:"user updated successfully",
      data:result,
    });
      
    } catch (error) {
      res. status(400).json({
        success:false,
        message:error.message,
      });
    }
  };


  export const deleteSpecificUser =async(req,res,next)=>{
    try {
     let id =req.params.id ;
     
     let result =await WebUser.findByIdAndDelete(id);
      res.status(200).json({
       success:true,
       message:"user deleted successfully",
      data:result,
    });
      
  
    } catch (error) {
      res.status(400).json({
        success:error.message,
        message:error.message,
      });
    }
  };
  export const  forgetPassword =async(req,res,next)=>{
    try {
     let email=req.body.email
     let result=await WebUser.findOne({
      email:email
     })

     if(result){

      //generate token
      let info={
        id:result.id,
    };
    
    
    let expiryInfo={
        expiresIn:"365d",
    };
    
    let myToken=jwt.sign(info,secreteKey,expiryInfo);
    console.log(myToken)
     

    // Send mail
    await sendMail({
      from: "'House-ofJob'<reenaroy190456@gmail.com>",
      to:email,
      subject: "Rest password",
      html: `<h1>Please click given link to reset your password</h1>
        <a href="http://localhost:3000/reset-password-email?token=${  myToken}">
        http://localhost:3000/reset-password-email?token=${myToken}</a>`,
    });
    res.status(200).json({
      success:true,
      message:" Link  has be send  to your email to reset your password "

    })
     }else{
      res.status(404).json({
        success:false,
        message:"email does not exist"
      })
     }
  
    } catch (error) {
      res.status(400).json({
        success:false,
        message:error.message,
      });
    }
  };

  export const  resetPassword =async(req,res,next)=>{
    try {
     
    let hashPassword=await bcrypt.hash(req.body.password,10);
    let result =await WebUser.findByIdAndUpdate(req.id,{
      password:hashPassword,
    },{new:true,});

    res.status(201).json({
      success:true,
      message:"password reset successfully ",
      data:result,
    })
  
    } catch (error) {
      res.status(400).json({
        success:false,
        message:error.message,
      });
    }
  };