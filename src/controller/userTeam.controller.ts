import type { Request, Response, NextFunction } from "express";
import { prisma } from "../lib/prisma-client.js";

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

    // 6. Pass unknown errors to the global error handler
    return next(err);
  }
};

export { addTeammateController };
