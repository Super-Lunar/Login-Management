import expressAsyncHandler from "express-async-handler";
import { User } from "../schema/model.js";
import { sendMail } from "../utils/sendMail.js";

export const crateUserController = expressAsyncHandler(
  async (req, res, next) => {
    let result1 = await User.create(req.body);
    await sendMail({
      from:"'HouseofJob'<reenaroy190456@gmail.com>",
      to:[req.body.email],
      subject:"account create",
      html:`<h1> your account has been created successfully</h1>`,
      
      });
    res.status(201).json({
      success: true,
      message: "User created successfully",
      result: result1,
    });
  }
);
export const readAllUserController = expressAsyncHandler(
  async (req, res, next) => {
    let result2 = await User.find({});
    res.status(200).json({
      success: true,
      message: "User read successfully",
      result: result2,
    });
  }
);
export const readSpecificUserController = expressAsyncHandler(
  async (req, res, next) => {
    let result3 = await User.findById(req.params.id);
    res.status(200).json({
      success: true,
      message: "Specific User read successfully",
      result: result3,
    });
  }
);
export const updateUserController = expressAsyncHandler(
  async (req, res, next) => {
    let result4 = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(201).json({
      success: true,
      message: "User updated successfully",
      result: result4,
    });
  }
);
export const deleteUserController = expressAsyncHandler(
  async (req, res, next) => {
    let result5 = await User.findByIdAndDelete(req.params.id);
    res.status(200).json({
      success: true,
      message: "User deleted successfully",
      result: result5,
    });
  }
);
