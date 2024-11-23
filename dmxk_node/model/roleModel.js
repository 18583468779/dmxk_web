// 角色权限
import mongoose from "mongoose";

export const roleSchema = new mongoose.Schema(
  {
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
    permissions: {
      // 用户有那些权限
      type: [{ type: String }],
      require: false,
    },
  },
  {
    timestamps: {
      createdAt: "createAt",
      updatedAt: "updateAt",
    },
  }
);
