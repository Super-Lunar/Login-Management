import express, { json } from "express";
import connectToMongoDb from "./src/connectToMongoDb/connectToMongoDb.js";
import errorMiddleware from "./src/middleware/errorMiddleware.js";
import notFoundMiddleware from "./src/middleware/notFoundMiddleware.js";
import userRouter from "./src/routes/userRouter.js";
import productRouter from "./src/routes/productRouter.js";
import reviewRouter from "./src/routes/reviewRouter.js";
import cors from "cors";
import personRouter from "./src/routes/personRouter.js";
import fileRouter from "./src/routes/fileRouter.js";
import webUserRouter from "./src/routes/webUserRouter.js";

let expressApp = express ();
expressApp.use(cors());// we can use this to hit API from browser and always place cors at top
expressApp.use(json());

expressApp.listen(8000, () => {
  console.log("server is running on port 8000");
  connectToMongoDb();
});

expressApp.use("/user", userRouter);
expressApp.use("/product", productRouter);
expressApp.use("/review", reviewRouter);
expressApp.use("/person", personRouter);
expressApp.use("/file", fileRouter);
expressApp.use("/web-user", webUserRouter);




expressApp.use(express.static("./public"));
expressApp.use("*", notFoundMiddleware);
expressApp.use(errorMiddleware);


//localhost:8000/reena.jpg
//localhost:8000/rina.jpg
