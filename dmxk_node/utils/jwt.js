// 使用jwt对用户进行身份验证
import jwt from "jsonwebtoken";
import { expiresIn, privateKey } from "../config/index.config.js";

/**
 *  @description 根据用户生成唯一token
 *  @param {用户信息} user
 */
const signToken = (user = 0) => jwt.sign({ user }, privateKey, { expiresIn });

const verifyToken = async (req, res, next) => {
  let token = req.headers.authorization;
  token = token ? token.split(" ")[1] : null;
  if (token) {
    try {
      let userInfo = await verify(token, privateKey); // 校验token
      req.user = userInfo; // 给当前请求赋值当前登录的用户信息
      next();
    } catch (error) {
      res.status(401).json({ error: "无效的token" });
    }
  } else {
    res.status(402).json({ error: "请传入token" });
  }
};
export { signToken, verifyToken };
