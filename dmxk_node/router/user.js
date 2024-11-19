// 用户相关的路由
import express from "express";

const router = express.Router();
//登录
router.post("/logins", (req, res) => {
  res.send("logins");
  console.log("req", req.body);
});
//注册
router.post("/registers", (req, res) => {
  res.send("registers");
});

export default router;
