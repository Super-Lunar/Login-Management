import mongoose from "mongoose";

const connectToMongoDb = async () => {
  await mongoose.connect("mongodb://0.0.0.0:27017/ExpressProject");
  console.log("application is connected to mongodb database successfully");
};
export default connectToMongoDb;
