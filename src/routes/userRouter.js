import { Router } from "express";
import {
  crateUserController,
  deleteUserController,
  readAllUserController,
  readSpecificUserController,
  updateUserController,
} from "../controller/userController.js";

let userRouter = Router();
userRouter.route("/").post(crateUserController)
.get(readAllUserController);
userRouter
  .route("/:id")
  .get(readSpecificUserController)
  .patch(updateUserController)
  .delete(deleteUserController);
export default userRouter;
