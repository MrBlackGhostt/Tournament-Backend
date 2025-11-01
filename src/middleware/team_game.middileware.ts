import type { Request, Response, NextFunction } from "express";
import { prisma } from "../lib/prisma-client.js";

const teamIdVerify = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const teamId = req.params.teamId as string;
  try {
    const team = await prisma.team.findUnique({
      where: {
        id: teamId,
      },
    });
    if (!team) {
      throw Error("Team not found");
    }
    next();
  } catch (error: any) {
    if ((error.message = "Team not Found")) {
      res.status(404).json({
        status: "failed",
        message: error.message,
      });
    }

    return next(error);
  }
};

export { teamIdVerify };
