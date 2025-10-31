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
    console.log("DATA RECEIVED", req.body);
    const userId = req.params.userId;
    const { gamePlay, userTeam } = req.body;

    const updateData: any = {}; // Build dynamically

    // Handle gamePlay: validate and prepare nested create
    // if (gamePlay) {
    //   const validateGames = Array.isArray(gamePlay)
    //     ? gamePlay.map((game: { gameName: string; userGameId: string }) => ({
    //         gameName: game.gameName,
    //         userGameId: game.userGameId,
    //       }))
    //     : [
    //         {
    //           gameName: gamePlay.gameName,
    //           userGameId: gamePlay.userGameId,
    //         },
    //       ];
    // if (validateGames.length > 0)
    //       //             userGameId: game.userGameId,})))
    //     }

    //     if (gamePlay) updateProfileData.gamePlay = gamePlay;
    //     if (userTeam) updateProfileData.userTeam = userTeam;

    const result = await prisma.profile.update({
      where: {
        userId: userId as string, // Valid since @unique
      },
      // updateProfileData,
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
      result,
      message:
        Object.keys(updateData).length > 0
          ? "Profile updated successfully"
          : "Profile unchanged",
    });
  } catch (error) {
    console.error("Update Error:", error); // Log details for debugging
    next(error); // Pass to middleware instead of throwing generic
  }
};

const userGameController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { gameName, userGameId } = req.body;
  const profileId = req.params.profileId;
  try {
    const result = await prisma.userGame.create({
      data: {
        gameName: gameName as string,
        userGameId: userGameId as string,
        profileId: profileId as string,
      },
    });
    console.log("🚀 ----------------------------------------🚀");
    console.log("🚀 ~ userGameController ~ result:", result);
    console.log("🚀 ----------------------------------------🚀");

    res.status(200).json({
      status: "complete",
      message: "userGame is added",
      data: result,
    });
  } catch (error) {
    throw Error("Error while adding the userGame");
  }
};

const userTeamCreateController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { noOfPlayer } = req.body;
  console.log("🚀 ------------------------------------------------------🚀");
  console.log("🚀 ~ userTeamCreateController ~ noOfPlayer:", noOfPlayer);
  console.log("🚀 ------------------------------------------------------🚀");
  const profileId = req.params.profileId;
  try {
    const result = await prisma.team.create({
      data: {
        noOfPlayer: noOfPlayer,
        users: {
          connect: {
            id: profileId as string,
          },
        },
      },
    });
    console.log("🚀 ----------------------------------------🚀");
    console.log("🚀 ~ userGameController ~ result:", result);
    console.log("🚀 ----------------------------------------🚀");

    res.status(200).json({
      status: "complete",
      message: "userTeam is created",
      data: result,
    });
  } catch (error) {
    throw Error("Error while creating the team");
  }
};

export {
  profileCreateController,
  profilePatchController,
  userGameController,
  userTeamCreateController,
};
