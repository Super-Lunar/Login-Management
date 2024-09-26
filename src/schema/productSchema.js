import { Schema } from "mongoose";
let productSchema = Schema({
  name: {
    type: String,
    required: [true, "name field is required"],
  },
  price: {
    type: Number,
    required: [true, "price field is required"],
  },
  quantity: {
    type: Number,
    required: [true, "quantity field is required"],
  },
  productImage: {
    type: String,
    required: [true, "product field is required"],
  },
});
export default productSchema;
