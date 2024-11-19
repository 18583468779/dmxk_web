import express from "express";
import router from "./router/index.js";
const app = express();

// 挂载路由
app.use("/api", router);

app.listen(3000, () => {
  console.log("端口号" + 3000);
});
