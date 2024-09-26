import { Router } from "express";
import {
  cratePersonController,
  deletePersonController,
  readAllPersonController,
  readSpecificPersonController,
  updatePersonController,
} from "../controller/personController.js";
import upload from "../middleware/uploadFile.js";

let personRouter =  Router();
personRouter.route("/")
.post(upload.single("file"),cratePersonController )
.get(readAllPersonController);
personRouter
  .route("/:id")
  .get(readSpecificPersonController)
  .patch(updatePersonController)
  .delete(deletePersonController);
export default personRouter;
