import Express, { Router } from "express";
import {
  profileValidator,
  // userValidator, f
} from "../validators/user-profile.validator.js";
import { userIdCheck } from "../middleware/user.js";
import { profileCreateController } from "../controller/profile.controller.js";

export const router: Router = Express.Router();

router.post("/create/:userId", userIdCheck, profileCreateController);
