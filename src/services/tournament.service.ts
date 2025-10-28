import { Prisma } from "@prisma/client";
import { prisma } from "../lib/prisma-client.js";
import type { SearchParams, TournamentInterface } from "../utils/type.js";

export const searchTournaments = async (params: SearchParams) => {
  const { tournamentName, gameName, orgName, orgId, page, limit } = params;
  let where: any = {};

  if (tournamentName) {
    where.tournamentName = {
      contains: tournamentName,
      // mode: "insenstive",
    };
  }

  if (gameName) {
    where.gameName = gameName;
  }

  if (orgName) {
    where.orgName = {
      contain: orgName,
      // mode: "insenstive",
    };
  }
  if (orgId) {
    where.orgId = orgId;
  }

  const skip = (page - 1) * limit;

  const [tournaments, total] = await prisma.$transaction([
    prisma.tournament.findMany({
      where,
      skip,
      take: limit,
      orderBy: { createdAt: "desc" },
      include: {
        whichOrg: true,
        game: true,
        teams: true,
      },
    }),
    prisma.tournament.count({ where }),
  ]);

  return {
    tournaments,
    meta: {
      total,
      page,
      limit,
      totalPage: Math.ceil(total / limit),
    },
  };
};

export const updateTournamentService = async (data: TournamentInterface) => {
  try {
    console.log(data);
    // const updateResult = await prisma.tournament.update({
    //   where: {
    //     id: data.id,
    //   },
    //   data: {
    //     noOfPlayerInTeam: data.noOfPlayerInTeam || undefined,
    //     noOfTeam: data.noOfTeam || undefined,
    //     // // teams: {
    //     // //   data : team[]
    //     // // },
    //     // tournamentName: data.tournamentName || undefined,
    //     // gameName: data.gameName || undefined,
    //   },
    // });
  } catch (error) {}
};
