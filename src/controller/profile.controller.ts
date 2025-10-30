import { prisma } from "../lib/prisma-client.js";
import type { Request, Response, NextFunction } from "express";
import { profileValidator } from "../validators/user-profile.validator.js";
import { create } from "domain";

const profileCreateController = async (
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

const profilePatchController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log("DATA SENDING", req.body);
    const userId = req.params.userId;
    // const { gamePlay, userTeam } = req.body;
    const result = await prisma.profile.update({
      where: {
        userId: userId as string, // Valid since @unique
      },
      data: {
        gamePlay: {
          create: Array.isArray(req.body.gamePlay)
            ? req.body.gamePlay.map(
                (game: { gameName: string; userGameId: string }) => ({
                  gameName: game.gameName,
                  userGameId: game.userGameId, // Assuming UserGame has this field; ensure it matches schema
                })
              )
            : [
                {
                  gameName: req.body.gamePlay?.gameName,
                  // userGameId: req.body.gamePlay?.userGameId,
                },
              ], // Handles single or array; skips if empty
        },
      },
      // For userTeam, use nested if updating, e.g.:
      // userTeam: { connect: userTeam?.map((t: any) => ({ id: t.id })) } // Or omit to leave unchanged

      include: { gamePlay: true, userTeam: true }, // Always include to verify relations in response
    });

    console.log("🚀 --------------------------------------------🚀");
    console.log("🚀 ~ profilePatchController ~ result:", result);
    console.log("🚀 --------------------------------------------🚀");

    res.status(200).json({
      data: result,
      message: "Profile is created",
    });
  } catch (error) {
    throw Error("Error in UPdating the profile");
  }
};

export { profileCreateController, profilePatchController };
