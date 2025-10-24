import type { Response, Request, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("INSITE THE AUTH MIDDLEWARE");
  console.log("cookei", req.cookies);
  const { accessToken, refreshToken } = req.cookies;
  console.log("🚀 ----------------------------------------------🚀");
  console.log("🚀 ~ authMiddleware ~ accessToken:", accessToken);
  console.log("🚀 ----------------------------------------------🚀");
  if (!accessToken && !refreshToken) {
    next({
      status: 401,
      message: "User not login",
    });
    return;
  }
  const checkAccessToken = jwt.verify(accessToken, "sodjfasdfsfsfsf");
  console.log("CHECKACCESSTOKEN", checkAccessToken);
  const checkRefreshToken = jwt.verify(refreshToken, "sodjfasdfsfsfsf");
  console.log("CHECKREFRESHTOKEN", checkRefreshToken);
  if (!checkAccessToken) {
    if (!checkRefreshToken) {
      const error = {
        status: 401,
        message: "Welcome back but need a Login to Continue",
      };
      next(error);
    }
  }
};
