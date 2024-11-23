// 商品相关的路由
import express from "express";
import { CommodityModel } from "../mongodb/index.js";
import { verifyToken } from "../utils/jwt.js";

const router = express.Router();

router.get("/lists", (req, res) => {
  res.send("lists");
});

// 新增一个源码
router.post("/create", verifyToken, async (req, res) => {
  let { _id } = req.user.user; // 当前登录人

  await new CommodityModel({ ...req.body, user: _id }).save();
  res.status(200).json({ code: 0, msg: "新增成功" });
});
export default router;
