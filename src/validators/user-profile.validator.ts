import type { NextFunction, Request, Response } from "express";
import z, { email } from "zod";

const profileDataCheck = z.object({
  gamePlay: z.array(
    z.object({
      gameName: z.string().optional(),
      userGameId: z.string().optional(),
    })
  ),
  userTeam: z.array(
    z.object({
      noOfPlayer: z.number().int().nonnegative().max(4).optional(),
      user: {
        username: z.string().optional(),
        email: z.email().optional(),
      },
    })
  ),
});

const userDataCheck = z.object({
  username: z.string().optional(),
  email: z.email().optional(),
});

const profileValidator = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("INSIDE THE PROFILE VALIDATOR");
  try {
    console.log(req.body);
    const check = profileDataCheck.parse(req.body);
    console.log("🚀 ------------------------------------🚀");
    console.log("🚀 ~ profileValidator ~ check:", check);
    console.log("🚀 ------------------------------------🚀");
    next();
  } catch (error) {
    if (error instanceof z.ZodError) {
      throw Error("INVALID PROFILE DATA ");
      next(error);
    }
  }
};

const userValidator = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const result = userDataCheck.parse(req.body);
};

export { profileValidator };
