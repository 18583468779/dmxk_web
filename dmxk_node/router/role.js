import express from "express";
import { verifyToken } from "../utils/jwt.js";
import { roleCreate } from "../controller/roleController.js";
const router = express.Router();

// 新增一个角色
router.post("/create", verifyToken, roleCreate);
export default router;
