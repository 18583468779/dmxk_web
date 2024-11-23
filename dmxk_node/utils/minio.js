import Minio from "minio";
import { endPoint, port } from "../config/index.config.js";

// 连接minio
export const minioClient = new Minio.Client({
  endPoint,
  port,
  accessKey: "admin",
  secretKey: "admin888",
  useSSL: false, // useSSL 选项指定客户端是否使用安全连接 (HTTPS) 与 MinIO 服务器通信。
});
