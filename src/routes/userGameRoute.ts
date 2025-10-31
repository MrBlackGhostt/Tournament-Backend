import Express, { Router } from "express";
import { profileIdCheck } from "../middleware/user.js";
import { userGameController } from "../controller/profile.controller.js";

const router: Router = Router();

router.get("/test", () => {
  console.log("Inside the UserGame Route");
});

//Add the userGame
router.post("/:profileId/add/userGame/", profileIdCheck, userGameController);

export { router as userGameRoute };
