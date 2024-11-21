//routes/index.js
import express from "express";

import authRoutes from "./authRoute.js";

const router = express.Router();

router.use("/api/auth", authRoutes);

export default router;
