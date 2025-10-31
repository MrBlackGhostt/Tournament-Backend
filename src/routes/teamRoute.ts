import Express, { Router } from "express";
import { profileIdCheck } from "../middleware/user.js";
import { userTeamCreateController } from "../controller/profile.controller.js";
import { addTeammateController } from "../controller/userTeam.controller.js";

const router: Router = Router();

router.get("/", () => {
  console.log("Route for the team");
});

// create the user team
router.post(
  "/:profileId/create/myteam",
  profileIdCheck,
  userTeamCreateController
);

// add user to the team OR Invite other user
router.patch("/add_teammate/:teamId", addTeammateController);

export { router as teamRoute };
