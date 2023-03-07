import { Router } from "express";

import redisController from "../controllers/redisController";
import userController from "../controllers/userController";

const router = Router();

router.get('/test', (req, res) => {
  return res.status(200).json({ message: "Hello world" });
})

router.get("/User", redisController.index);

router.post("/User", userController.create);

export { router };
