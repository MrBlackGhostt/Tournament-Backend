import Express, { Router } from "express";
import {
  profileValidator,
  // userValidator, f
} from "../validators/user-profile.validator.js";
import { profileIdCheck, userIdCheck } from "../middleware/user.js";
import {
  profileCreateController,
  profilePatchController,
} from "../controller/profile.controller.js";

export const router: Router = Express.Router();

router.post("/create/:userId/", userIdCheck, profileCreateController);

router.patch(
  "/patch/:userId/:profileId",
  userIdCheck,
  profileIdCheck,
  profileValidator,
  profilePatchController
);
