import express from "express";
import {
  getAllStudents,
  getFacultyById,
  getStudentById,
} from "../controller/faculty.controller.js";

const facultyRouter = express.Router();

facultyRouter.get("/student", getAllStudents);
facultyRouter.get("/student/:id", getStudentById);
facultyRouter.get("/:id", getFacultyById);

export default facultyRouter;
