import Redis from "ioredis";
import { endPoint, redisPoint, redisPwd } from "../../config/index.config";
const redis = new Redis(redisPoint, endPoint, { password: redisPwd });

redis.on("error", (err) => {
  if (err) {
    console.log("Redis链接错误", err);
    redis.quit();
  }
});

redis.on("ready", () => {
  console.log("Redis链接成功");
});

export default redis;
