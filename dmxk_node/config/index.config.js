const appPort = 3000;
const DBNAME = "dmxk_test";
const redisPoint = 6379;
const MINIOPORT = 9000;
const redisPwd = 123456;
const endPoint = "127.0.0.1";
const privateKey = "daimaxiaokuaiaiai123456!"; // token密钥
const expiresIn = 60 * 60 * 10; // token过期时间
export {
  appPort,
  DBNAME,
  redisPoint,
  redisPwd,
  endPoint,
  privateKey,
  expiresIn,
  MINIOPORT as port,
};
