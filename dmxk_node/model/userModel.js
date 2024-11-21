// user用户模型
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import baseModel from "./baseModel.js";

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
  ...baseModel,
});

// 预保存钩子,在保存用户数据钱对数据进行加密
userSchema.pre("save", async function (next) {
  // 只有在密码发生改变时才进行加密
  if (!this.isModified) return next();
  try {
    // 加密密码
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(this.password, salt);
    // 将加密后的密码保存在文档里
    this.password = hashPassword;
  } catch (error) {
    next(error);
  }
});

//验证密码的方法
userSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};
