import { Router } from "express";
import { isLoggedIn, isNotLoggedIn } from "../middlewares/protectedRoutes.js";
import { renderInfo2 } from "../controllers/info.controlller.js";

const router = Router();

router.get("/", (req, res) => {
    res.render('info/generalInfo');
});

export default router;
