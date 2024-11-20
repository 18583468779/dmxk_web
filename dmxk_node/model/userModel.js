// user用户模型
import mongoose from "mongoose";
import baseModel from "./baseModel.js";

export const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    default: null,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    default: null,
  },
  phone: {
    type: Number,
    required: false,
    unique: true,
  },
  email: {
    type: String,
    required: false,
    unique: true,
  },
  ...baseModel,
});
