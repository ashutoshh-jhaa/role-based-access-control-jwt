import express from "express";
import {
  adminLogin,
  facultyLogin,
  studentLogin,
} from "../controller/auth.controller.js";

const authRouter = express.Router();

authRouter.post("/admin/login", adminLogin);
authRouter.post("/faculty/login", facultyLogin);
authRouter.post("/student/login", studentLogin);

export default authRouter;
