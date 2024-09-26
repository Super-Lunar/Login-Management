import expressAsyncHandler from "express-async-handler";
import { Review } from "../schema/model.js";

export const crateReviewController = expressAsyncHandler(
  async (req, res, next) => {
    let result1 = await Review.create(req.body);
    res.status(201).json({
      success: true,
      message: "Review created successfully",
      result: result1,
    });
  }
);
export const readAllReviewController = expressAsyncHandler(
  async (req, res, next) => {
    let result2 = await Review.find({}).populate("user").populate("product"); // retrive all the data in the database
    res.status(200).json({
      success: true,
      message: "Review read successfully",
      result: result2,
    });
  }
);
export const readSpecificReviewController = expressAsyncHandler(
  async (req, res, next) => {
    let result3 = await Review.findById(req.params.id);
    res.status(200).json({
      success: true,
      message: "Specific Review read successfully",
      result: result3,
    });
  }
);
export const updateReviewController = expressAsyncHandler(
  async (req, res, next) => {
    let result4 = await Review.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(201).json({
      success: true,
      message: "Review updated successfully",
      result: result4,
    });
  }
);
export const deleteReviewController = expressAsyncHandler(
  async (req, res, next) => {
    let result5 = await Review.findByIdAndDelete(req.params.id);
    res.status(200).json({
      success: true,
      message: "Review deleted successfully",
      result: result5,
    });
  }
);
