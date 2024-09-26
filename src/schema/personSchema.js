import { Schema } from "mongoose";

let personSchema = Schema({
  name: {
    type: String,
    required: [true, "name field is required"],
  },
  age: {
    type: Number,
    required: [true, "age field is required"],
  },
  file: {
    type: String,
    required: [true, "img field is required"],
  },
});
export default personSchema;
/* pass image 
upload image to server
 we have link 
 we store that link in database*/
