import express from "express";
import { getStudentById } from "../controller/student.controller.js";

const studentRouter = express.Router();

studentRouter.get("/:id", getStudentById);

export default studentRouter;
