import Express, { Router } from "express";

export const router: Router = Express.Router();

router.post("/create/:userId", profileValidator, async (req, res) => {
  const id = req.params.userId;

  const result = await createProfile;
  const data = req.body;
});
