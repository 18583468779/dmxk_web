// user用户模型
import mongoose, { set } from "mongoose";
import baseModel from "./baseModel.js";
import { cryptoMd5 } from "../utils/md5.js";

export const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: false,
    default: null,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    default: null,
    set: (val) => cryptoMd5(val), // 密码加密
    select: false,
  },
  phone: {
    type: Number,
    required: false,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  avatar: {
    // 用户头像
    type: String,
    required: false,
  },
  ...baseModel,
});
