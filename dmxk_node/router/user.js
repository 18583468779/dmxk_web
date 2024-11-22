// 用户相关的路由
import express from "express";
import { logins, registers, sendEmail } from "../controller/userController.js";
import { loginsValidator } from "../middleware/validator.js";

const router = express.Router();
router
  .post("/logins", loginsValidator, logins) // 登录
  .post("/sendEmail", sendEmail) // 发送邮件
  .post("/registers", registers); // 注册

export default router;
