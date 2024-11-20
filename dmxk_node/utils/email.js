// 使用nodemailer服务
import nodemailer from "nodemailer";

// 配置SMTP服务器
export const transporter = nodemailer.createTransport({
  service: "qq", // 使用内置传输发送邮件
  port: 465, // SMTP 端口
  secure: true, // 使用了 SSL
  auth: {
    user: "1123654054@qq.com", // 用来发送邮件的邮箱账户
    pass: "yyexqwmfsdorhicb", // QQ开启 IMAP/SMTP服务后获取的授权码
  },
});
/**
 *  @description 发送邮件
 *  @param {用户的邮件} mailId
 *  @param {验证码} verifyCode
 */

export async function sendMailToMailId(mailId, verifyCode) {
  let mailOptions = {
    from: '"代码小库" <1123654054@qq.com>',
    to: mailId,
    subject: "邮箱验证",
    text: `您正在使用该 ${mailId} 邮箱进行注册，验证码为：${verifyCode}`,
  };
  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return reject(error);
      }
      resolve(info.messageId);
    });
  });
}

/**
 *  @description 生成随机验证码，默认4位
 *  @param {几位验证码} num
 */
export function generateVerifyCode(num = 4) {
  const chars =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let code = "";
  for (let i = 0; i < num; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return code;
}
