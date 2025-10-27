import Express, { Router } from "express";
import type {} from ".pnpm/@types+express-serve-static-core@5.0.7/node_modules/@types/express-serve-static-core";
import {
  createTournament,
  searchTournaments,
  updateTournament,
} from "../controller/tournament.controller.js";
import { validateSearchQuery } from "../validators/tournament.validator.js";
const router: Router = Express.Router();

router.get("/", (req, res) => {
  res.send({
    message: "IN THE TOURNAMENT ROUTE",
  });
});

router.post("/create", createTournament);
export const TournamentRoute = router;

router.get("/search", validateSearchQuery, searchTournaments);

router.put("/update/:tournamentid", updateTournament);
