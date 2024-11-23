// 定义路由根模块
import express from "express";
import user from "./user.js";
import commodity from "./commodity.js";
import role from "./role.js";

const router = express.Router();

router.use("/user", user);
router.use("/commodity", commodity);
router.use("/role", role);

export default router;
