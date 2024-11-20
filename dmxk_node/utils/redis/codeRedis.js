export async function setVerifyCodeToRedis(phone, code) {
  const key = `sms_code:${phone}`;
  // 设置验证码，5分钟（300秒）后过期
  await redis.setex(key, 300, code);
}
