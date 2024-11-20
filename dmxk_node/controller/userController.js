import { sendMailToMailId } from "../utils/email.js";

// 用户登录
const logins = async (req, res) => {
  console.log(req.body);
  res.send("111");
};
// 获取邮箱验证码
const sendEmail = async (req, res) => {
  let { email } = req.body;
  console.log(email);
  let val = await sendMailToMailId(email, 12345);
};

//用户注册
const registers = async (req, res) => {
  console.log(req.body);
  let { email, password, confirmPassword } = req.body;
  res.send("111");
};

export { logins, registers, sendEmail };
