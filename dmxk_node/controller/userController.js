import { generateVerifyCode, sendMailToMailId } from "../utils/email.js";

// 用户登录
const logins = async (req, res) => {
  console.log(req.body);
  res.send("111");
};
// 获取邮箱验证码
const sendEmail = async (req, res) => {
  let { email } = req.body;
  let code = generateVerifyCode(6);
  let val = await sendMailToMailId(email, code);
};

//用户注册
const registers = async (req, res) => {
  let { email, password, confirmPassword, code } = req.body;
  res.send("111");
};

export { logins, registers, sendEmail };
