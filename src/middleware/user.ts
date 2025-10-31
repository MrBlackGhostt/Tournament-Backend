import { type Response, type Request, type NextFunction } from "express";
import jwt from "jsonwebtoken";
import { prisma } from "../lib/prisma-client.js";

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

const userIdCheck = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.userId;
    console.log("INSIDE THE USERIDCHECK");
    const result = await prisma.user.findUnique({
      where: {
        id: id as string,
      },
      select: {
        username: true,
        email: true,
      },
    });
    console.log("RESULT ", result);
    req.body = { ...req.body, user: result };
    console.log("User inside teh req", req.body.user);
    next();
  } catch (error) {
    next({
      staus: 500,
      message: "User of this id not present",
    });
  }
};

const profileIdCheck = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.profileId;

    console.log("INSIDE THE PROFILEIDCHECK");
    const result = await prisma.profile.findUnique({
      where: {
        id: id as string,
      },
    });
    console.log("RESULT ", result);
    req.body = { ...req.body, profile: result };
    console.log("Profile inside teh req", req.body);
    next();
  } catch (error) {
    next({
      staus: 500,
      message: "Profile of this id not present",
    });
  }
};

export { userIdCheck, profileIdCheck };
