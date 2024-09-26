import { Router } from "express";
// import {
//   crateFileController,
//   deleteFileController,
//   readAllFileController,
//   readSpecificFileController,
//   updateFileController,
// } from "../controller/fileController.js";
import upload from "../middleware/uploadFile.js";
import { crateFile, crateMultipleFile} from "../controller/fileController.js";

let fileRouter =  Router();
fileRouter.route("/single")
.post(upload.single("file"),crateFile )

fileRouter.route("/multiple")

.post(upload.array("file"),crateMultipleFile)



export default fileRouter;
