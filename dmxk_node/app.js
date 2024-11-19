import express from "express";
import router from "./router/index.js";
import { appPort } from "./config/index.config.js";

const app = express();

// 解析post请求参数
app.use(express.json());
app.use(express.urlencoded());

// 挂载路由
app.use("/api", router);

app.listen(appPort, () => {
  console.log("服务器已启动，端口号" + appPort);
});
