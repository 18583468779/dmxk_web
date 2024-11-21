import crypto from "crypto";
export const cryptoMd5 = (str) =>
  crypto
    .createHash("md5")
    .update("daimaxiaoku" + str)
    .digest("hex");
