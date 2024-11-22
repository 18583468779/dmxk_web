import { body } from "express-validator";
import { validate } from "./errorResult.js";
import { UserModel } from "../mongodb/index.js";

const loginsValidator = validate([
  body("email")
    .notEmpty()
    .trim()
    .withMessage("邮箱不能为空")
    .isEmail()
    .withMessage("邮箱格式错误")
    .bail()
    .custom(async (value) => {
      const user = await UserModel.findOne({ email: value });
      if (!user) {
        throw new Error("该邮箱未注册！");
      }
      return true;
    }),
  body("password")
    .notEmpty()
    .withMessage("密码不能为空")
    .trim()
    .isLength({ min: 6, max: 24 })
    .withMessage("密码长度在6-24位之间")
    .custom(async (value, { req }) => {
      if (!/[A-Za-z]/.test(value) || !/\d/.test(value)) {
        throw new Error("密码必须同时包含字母和数字");
      }
      const { email, password } = req.body;
      const user = await UserModel.findOne({ email, password });
      if (!user) throw new Error("密码错误");
      return true;
    }),
]);

export { loginsValidator };
