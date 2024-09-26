import expressAsyncHandler from "express-async-handler";
import { Person } from "../schema/model.js";

export const cratePersonController  = expressAsyncHandler (
  async (req, res, next) => {


    let link=`localhost:8000/$(req.file.filename)`

     let result1 = await Person.create({
        name:req.body .name,
        age:req.body.age,
        file:link,

     });
    
    // let result1 = await Person.create(req.body);
    // console.log("************",req.file);
    // console.log("****************",req.body);
    res.status(201).json({
      success: true,
      message: "Person created successfully",
      result: result1,
    });
  }
);
export const readAllPersonController = expressAsyncHandler(
  async (req, res, next) => {
    let result2 = await Person.find({});
    res.status(200).json({
      success: true,
      message: "Person read successfully",
      result: result2,
    });
  }
);
export const readSpecificPersonController = expressAsyncHandler(
  async (req, res, next) => {
    let result3 = await Person.findById(req.params.id);
    res.status(200).json({
      success: true,
      message: "Specific Person read successfully",
      result: result3,
    });
  }
);
export const updatePersonController = expressAsyncHandler(
  async (req, res, next) => {
    let result4 = await Person.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(201).json({
      success: true,
      message: "Person updated successfully",
      result: result4,
    });
  }
);
export const deletePersonController = expressAsyncHandler(
  async (req, res, next) => {
    let result5 = await Person.findByIdAndDelete(req.params.id);
    res.status(200).json({
      success: true,
      message: "Person deleted successfully",
      result: result5,
    });
  }
);
