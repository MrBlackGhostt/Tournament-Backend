import type { RequestHandler, Request, Response, NextFunction } from "express";
import { prisma } from "../lib/prisma-client.js";

// interface teamReqInterface {
//   teamId: string;
//   profileId: string;
// }

const addTeammateController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const teamId = req.params.teamId as string;
  const profileId = req.body.userId as string; // assuming this is the Profile.id

  try {
    const result = await prisma.$transaction(async (tx) => {
      // 1. Find the team and its current player count
      const team = await tx.team.findUnique({
        where: { id: teamId },
        select: {
          noOfPlayer: true,
          _count: { select: { users: true } },
        },
      });

      // 2. Validate the team
      if (!team) {
        throw new Error("Team not found");
      }
      if (team._count.users >= team.noOfPlayer) {
        throw new Error("Team is full");
      }

      // 3. Add the user to the team
      //    (This is the corrected part)
      return tx.team.update({
        where: { id: teamId },
        data: {
          // <-- This 'data' key was missing
          users: {
            connect: { id: profileId },
          },
        },
        include: { users: true }, // Include the updated list of users
      });
    });

    // 4. Send the successful response
    return res.status(200).json({ ok: true, team: result });
  } catch (err: any) {
    // 5. Handle specific known errors
    if (err.message === "Team is full") {
      return res.status(409).json({ ok: false, error: "Team is full" });
    }
    if (err.message === "Team not found") {
      return res.status(404).json({ ok: false, error: "Team not found" });
    }

    // 6. Pass unknown errors to the global error handle
    return next(err);
  }
};

// User want to leave the team
const leaveTeamController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const teamId = req.params.teamId as string;
  const profileId = req.params.profileId as string;
  try {
    const result = await prisma.team.update({
      where: {
        id: teamId,
      },
      data: {
        users: {
          disconnect: { id: profileId },
        },
      },
    });
    console.log("🚀 -----------------------------------------🚀");
    console.log("🚀 ~ leaveTeamController ~ result:", result);
    console.log("🚀 -----------------------------------------🚀");
    res.status(200).json({
      status: "complete",
      message: "User Remove from the team",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      status: "Failed",
      message:
        "Something Went wrong while Removing the user form the team TRY AGAIN!!!",
    });
  }
};

export { addTeammateController, leaveTeamController };
