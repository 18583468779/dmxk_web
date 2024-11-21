// 数据库链接
import mongoose from "mongoose";
import { DBNAME } from "../config/index.config.js";
import { userSchema } from "../model/userModel.js";

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

export { UserModel };
