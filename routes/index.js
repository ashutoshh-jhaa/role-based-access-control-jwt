import express from "express";
import adminRouter from "./admin.routes.js";
import facultyRouter from "./faculty.routes.js";
import studentRouter from "./student.routes.js";
import { authenticateJwt, authorize } from "../auth/middleware.js";
import authRouter from "./auth.routes.js";

const router = express.Router();

//auth routes
router.use("/auth", authRouter);

//protected routes
router.use("/admin", authenticateJwt, authorize(["admin"]), adminRouter);

router.use(
  "/faculty",
  authenticateJwt,
  authorize(["admin", "faculty"]),
  facultyRouter,
);

router.use(
  "/student",
  authenticateJwt,
  authorize(["admin", "faculty", "student"]),
  studentRouter,
);

export default router;
