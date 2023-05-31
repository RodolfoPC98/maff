import { Router } from "express";
import { isLoggedIn, isNotLoggedIn } from "../middlewares/protectedRoutes.js";
import { validator } from "../middlewares/validator.middleware.js";
import {
  renderAddGame,
  addGame,
  renderGames,
  deleteGame,
  editGame,
  renderEditGame,
  renderInfo,
} from "../controllers/games.controller.js";
import { createGameSchema } from "../schemas/task.schema.js";

const router = Router();

router.get("/", isLoggedIn, renderGames);
router.get("/add", isLoggedIn, renderAddGame);
router.post("/add", isLoggedIn, validator(createGameSchema), addGame);
router.get("/delete/:id", isLoggedIn, deleteGame);
router.get("/edit/:id", isLoggedIn, renderEditGame);
router.post("/edit/:id", isLoggedIn, editGame);
router.get("/info", isNotLoggedIn, renderInfo);

export default router;
