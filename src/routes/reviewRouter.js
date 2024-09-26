import { Router } from "express";
import {
  crateReviewController,
  deleteReviewController,
  readAllReviewController,
  readSpecificReviewController,
  updateReviewController,
} from "../controller/reviewController.js";

let reviewRouter = Router();
reviewRouter
  .route("/")
  .post(crateReviewController)
  .get(readAllReviewController);
reviewRouter
  .route("/:id")
  .get(readSpecificReviewController)
  .patch(updateReviewController)
  .delete(deleteReviewController);
export default reviewRouter;
