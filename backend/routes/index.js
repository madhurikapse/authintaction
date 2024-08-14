import { Router } from "express";
import AuthRoutes from "./auth.routes.js";
import UserRoutes from "./user.routes.js";

const router = Router();

router.use("/auth", AuthRoutes);
router.use("/user", UserRoutes);

export default router;