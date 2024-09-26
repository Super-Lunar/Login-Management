import { Router } from "express";
import {
  crateWebUserController,
  deleteSpecificUser,
  forgetPassword,
  loginUser,
  myProfile,
  readAllSpecificUser,
  readAllUser,
  resetPassword,
  updatePassword,
  updateProfile,
  updateSpecificUser,
  verifyEmail,
  
 
} from "../controller/webUserController.js";
import { secreteKey } from "../constant.js";
import jwt from "jsonwebtoken";
import isAuthenticated from "../middleware/isAuthenticated.js";
import authorized from "../middleware/authorized.js";

let webUserRouter = Router();
webUserRouter.route("/")
.post(crateWebUserController)
.get(isAuthenticated,authorized(["admin","superAdmin"]),readAllUser )



webUserRouter.route("/verify-email").patch(verifyEmail)
webUserRouter.route("/login").post(loginUser);
webUserRouter.route("/my-profile").get( isAuthenticated,myProfile);
webUserRouter.route("/update-profile").patch(isAuthenticated,updateProfile)
webUserRouter.route("/forget-password").post(forgetPassword)
webUserRouter.route("/reset-password").patch(isAuthenticated, resetPassword)


webUserRouter .route("/:id")
.get(isAuthenticated,authorized(["admin", "superAdmin"]),readAllSpecificUser)//admin, superAdmin are authorized 
.patch(isAuthenticated,authorized(["admin","superAdmin"]),updateSpecificUser)//admin,superAdmin
.delete(isAuthenticated,authorized(["superAdmin"]),deleteSpecificUser)//superAdmin


export default  webUserRouter;




