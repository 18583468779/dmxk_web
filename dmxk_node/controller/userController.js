import { UserModel } from "../mongodb/index.js";
import { generateVerifyCode, sendMailToMailId } from "../utils/email.js";
import {
  getVerifyCodeToRedis,
  setVerifyCodeToRedis,
} from "../utils/redis/codeRedis.js";

// 用户登录
const logins = async (req, res) => {
  console.log(req.body);
  let { email, password } = req.body;
  try {
    let user = await UserModel.findOne({ email });
    if (!user)
      return res
        .status(404)
        .json({ code: 1, msg: "该账号不存在，请注册账号后登录" });
    const isMatch = await user.comparePassword(password);
    if (!isMatch) return res.status(400).json({ code: 1, msg: "密码错误！" });
    res.status(200).json({ code: 0, data: user, msg: "恭喜你！登录成功" });
  } catch (error) {
    res.status(500).json({ code: 1, msg: error });
  }
};
// 获取邮箱验证码
const sendEmail = async (req, res) => {
  let { email } = req.body;
  let code = generateVerifyCode(6);
  try {
    await sendMailToMailId(email, code);
    setVerifyCodeToRedis(email, code); // 验证码存储在redis
    res.status(200).json({
      code: 0,
      msg: "发送成功，请在邮箱查收",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      code: 1,
      msg: error,
    });
  }
};

//用户注册
const registers = async (req, res) => {
  let { email, password, confirmPassword, code } = req.body;
  let storeCode = await getVerifyCodeToRedis(email);
  if (storeCode !== code)
    return res.status(403).send({
      code: 1,
      msg: "验证码错误",
    });

  if (password !== confirmPassword)
    return res.status(403).send({
      code: 1,
      msg: "密码不一致",
    });
  try {
    // 入库操作
    new UserModel({
      email,
      password,
    }).save();
    res.status(200).send({
      code: 0,
      msg: "恭喜你，注册成功！",
    });
  } catch (error) {
    res.status(500).send({
      code: 1,
      msg: error,
    });
  }
};

export { logins, registers, sendEmail };
