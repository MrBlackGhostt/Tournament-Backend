import type { NextFunction, Request, Response } from "express";
import z from "zod";

const profileDataCheck = z.object({
    gamePlay:
});

const profileValidator = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const check = profileDataCheck.parse(req.body);
  } catch (error) {}
};
