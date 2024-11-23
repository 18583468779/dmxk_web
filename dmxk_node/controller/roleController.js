import { RoleModel } from "../mongodb.js";

const roleCreate = async (req, res) => {
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
};

export { roleCreate };
