import { prisma } from "../lib/prisma-client.js";
import type { Request, Response, NextFunction } from "express";

export const profileCreateController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userId = req.params.userId;
  const { username } = req.body.user;

  try {
    const result = await prisma.profile.create({
      data: {
        userName: username as string,
        userId: userId as string,
      },
    });

    res.status(200).json({
      status: "completed",
      data: result,
    });
  } catch (error) {
    console.log(
      "ERROR WHILE CREATING THE PROFILE",
      error instanceof Error ? error.message : ""
    );
    next(error);
    throw Error("Error while creating the profile");
  }
};
