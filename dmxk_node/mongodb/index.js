// 数据库链接
import mongoose from "mongoose";
import { DBNAME } from "../config/index.config.js";
import { userSchema } from "../model/userModel.js";
import { commoditySchema } from "../model/commodityModel.js";
import { roleSchema } from "../model/roleModel.js";

async function main() {
  await mongoose.connect(`mongodb://127.0.0.1:27017/${DBNAME}`);
}
mongoose.connection.on("error", (err) => {
  console.error("MongoDB connection error:", err);
});
main()
  .then(() => {
    console.log("数据库链接成功");
  })
  .catch((err) => {
    console.log(err);
  });

const UserModel = new mongoose.model("UserModel", userSchema); // 用户模型
const CommodityModel = new mongoose.model("CommodityModel", commoditySchema); // 商品（源码）模型
const RoleModel = new mongoose.model("RoleModel", roleSchema); // 角色模型
export { UserModel, CommodityModel, RoleModel };
