// 商品相关的路由
import express from "express";

const router = express.Router();

router.get("/lists", (req, res) => {
  res.send("lists");
});

export default router;
