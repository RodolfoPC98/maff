import { Router } from "express";
import auth from "./auth.routes.js";
import index from "./index.routes.js";
import games from "./games.routes.js";
import user from "./user.routes.js";
import info2 from "./info.routes.js";
import fauna from "./fauna.routes.js";

const router = Router();

router.use(index);
router.use(auth);
router.use(user);
router.use("/info", info2);
router.use("/fauna", fauna);
router.use("/games", games);

export default router;
