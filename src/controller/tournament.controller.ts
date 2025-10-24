import prisma from "../prisma-client.js";
import type { NextFunction, Request, Response } from "express";

export const createTournament = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("Creating the tournament");
  const { noOfTeam, gameName, noOfPlayerInTeam } = req.body;
  try {
    await prisma.tournament.create({
      data: {
        noOfTeam,
        gameName,
        noOfPlayerInTeam,
      },
    });
    res.status(200).send({
      message: "Tournament Created",
    });
  } catch (error) {
    throw Error("Error in Creating the Tournament");
    next(error);
  }
};

export const findTournament = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {};
