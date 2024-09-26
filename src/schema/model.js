//define table name

import { model } from "mongoose";
import productSchema from "./productSchema.js";
import userSchema from "./userSchema.js";
import reviewSchema from "./reviewSchema.js";
import personSchema from "./personSchema.js";
import webUserSchema from "./webUserSchema.js";

export let User = model("User", userSchema);
export let Product = model("Product", productSchema);
export let Review = model("Review", reviewSchema);
export let Person= model("Person", personSchema);
export let WebUser= model("WebUser", webUserSchema);


