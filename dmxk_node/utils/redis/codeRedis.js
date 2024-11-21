import redis from "./redis.js";
/**
 *  @description 设置验证码，5分钟（300秒）后过期
 *  @param {用户邮箱} email
 *  @param {验证码} code
 *
 * */
export async function setVerifyCodeToRedis(email, code) {
  const key = `sms_code:${email}`;
  await redis.setex(key, 300, code);
}

/**
 *  @description 获取验证码
 *  @param {用户邮箱} email
 * */
export async function getVerifyCodeToRedis(email) {
  const key = `sms_code:${email}`;
  let result = await redis.get(key);
  return result;
}
