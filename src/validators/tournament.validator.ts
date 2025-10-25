import type { Request, Response, NextFunction } from "express";
import { z } from "zod";

const searchQuerySchema = z.object({
  tournamentName: z.string().optional(),
  noOfTeam: z.string().optional(),
  orgName: z.string().optional(),
  orgID: z.string().optional(),
  gameName: z.string().optional(),
  page: z.string().regex(/^\d+$/).optional().default("1"),
  limit: z.string().regex(/^\d+$/).optional().default("10"),
});

// validate the query parameter

export const validateSearchQuery = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("Inside validate", req.query);
  try {
    searchQuerySchema.parse(req.query);
    console.log("check the validate");
    next();
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error("INVALID QUERY PARAMETER FOR THE TOURNAMENT");
      next(error);
    }
  }
};
