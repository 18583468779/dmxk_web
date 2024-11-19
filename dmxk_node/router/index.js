// 定义路由根模块
import express from "express";
import user from "./user.js";
import commodity from "./commodity.js";

const router = express.Router();

router.use("/user", user);
router.use("/commodity", commodity);

export default router;
