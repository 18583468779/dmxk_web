// 商品（源码）模型

import mongoose from "mongoose";
import baseModel from "./baseModel.js";

export const commoditySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: false,
    default: "一些描述",
  },
  user: {
    type: mongoose.Schema.ObjectId,
    required: true,
    ref: "User", // 关联user表
  },
  url: {
    // 源码地址
    type: String,
    required: true,
  },
  cover: {
    // 封面
    type: String,
    required: true,
  },
  ...baseModel,
});
