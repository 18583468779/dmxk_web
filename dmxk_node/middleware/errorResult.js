// 请求验证的错误处理

import { validationResult } from "express-validator";

export const validate = (validator) => {
  return async (req, res, next) => {
    await Promise.all(validator.map((validate) => validate.run(req)));
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(401).json({ error: errors.array() });
    }
    next();
  };
};
