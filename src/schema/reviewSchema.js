import { Schema } from "mongoose";

let reviewSchema = Schema({
  user: {
    type: Schema.ObjectId,
    ref: "User",
    required: [true, "userId field is required"],
  },
  product: {
    type: Schema.ObjectId,
    ref: "Product",
    required: [true, "productId field is required"],
  },
  description: {
    type: String,
    required: [true, "description field is required"],
  },
});
export default reviewSchema;
