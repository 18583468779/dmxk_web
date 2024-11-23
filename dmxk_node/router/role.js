import express from "express";
import { verifyToken } from "../utils/jwt.js";
import { RoleModel } from "../mongodb/index.js";
const router = express.Router();

// 新增一个角色
router.post("/create", verifyToken, async (req, res) => {
  try {
    let user = req.user.user._id;
    await new RoleModel({ ...req.body, user }).save();

    res.status(200).json({
      code: 0,
      msg: "角色新增成功",
    });
  } catch (error) {
    res.status(500).json({
      code: 1,
      msg: error,
    });
  }
});
export default router;
