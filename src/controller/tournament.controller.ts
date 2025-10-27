import { prisma } from "../lib/prisma-client.js";
import type { NextFunction, Request, Response } from "express";
import * as tournamentService from "../services/tournament.service.js";

import { success } from "zod";
import { updateTournamentService } from "../services/tournament.service.js";

export const createTournament = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("Creating the tournament");
  const { tournamentName, noOfTeam, gameName, noOfPlayerInTeam } = req.body;
  try {
    await prisma.tournament.create({
      data: {
        tournamentName,
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
) => {
  const { name } = req.body;
  try {
    const tournaments = await prisma.tournament.findMany({
      where: {
        tournamentName: name,
      },
    });
    if (tournaments.length === 0) {
      throw Error("No Tournament Find of this name");
    } else {
      res.status(200).send({
        data: tournaments,
        message: "Req complete",
      });
    }
  } catch (error) {
    console.error({
      message: error,
    });
    next(error);
  }
};

export const searchTournaments = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const {
    tournamentName,
    noOfTeam,
    orgId,
    orgName,
    gameName,
    page = "1",
    limit = "10",
  } = req.query;
  try {
    const pageNum = parseInt(page as string);
    const limitNum = parseInt(limit as string);

    const result = await tournamentService.searchTournaments({
      tournamentName: tournamentName as string,
      gameName: gameName as string,
      orgName: orgName as string,
      orgId: orgId as string,
      page: pageNum,
      limit: limitNum,
    });

    res.status(200).json({
      success: true,
      data: result.tournaments,
      meta: result.meta,
    });
  } catch (error) {
    console.error("Error searching tournaments:", error);
    next({
      status: 500,
      success: false,
      message: "Failed to search tournaments",
    });
  }
};

export const updateTournament = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const updateTournament = await updateTournamentService(req.body);
    console.log(
      "🚀 ----------------------------------------------------------🚀"
    );
    console.log("🚀 ~ updateTournament ~ updateTournament:", updateTournament);
    console.log(
      "🚀 ----------------------------------------------------------🚀"
    );
  } catch (error) {
    throw Error("Error in updatingthe tournament");
    next(error);
  }
};
