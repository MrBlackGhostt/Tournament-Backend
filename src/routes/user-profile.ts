import Express, { Router } from "express";
import {
  profileValidator,
  // userValidator, f
} from "../validators/user-profile.validator.js";
import { profileIdCheck, userIdCheck } from "../middleware/user.js";
import {
  profileCreateController,
  profilePatchController,
  userGameController,
  userTeamCreateController,
} from "../controller/profile.controller.js";
import { teamRoute } from "./teamRoute.js";
import { userGameRoute } from "./userGameRoute.js";

export const router: Router = Express.Router();

router.post("/create/:userId/", userIdCheck, profileCreateController);

router.patch(
  "/patch/:userId/:profileId",
  userIdCheck,
  profileIdCheck,
  profileValidator,
  profilePatchController
);

// UserGame Route

router.use("/myGame", userGameRoute);

router.use("/:profileId/myteam", profileIdCheck, teamRoute);
