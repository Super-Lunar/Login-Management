import { WebUser } from "../schema/model.js";

let authorized=(roles)=>{
    roles=["admin","superAdmin"]
    return async(req,res,next)=>{
   
      try {
        let id=req.id;
  
        let result=await WebUser.findById(id);
        let tokenRole=result.role;//admin

        if(roles.includes(tokenRole)){
          next();
        }else{
  res.status(403).json({
    success:false,
    message:"user ot authorized",
  })
 }
    
      } catch (error) {
        res.status(403).json({
          success:false,
          message:"user is not authorized"
        });
      }
  
    }
  }

  export default authorized