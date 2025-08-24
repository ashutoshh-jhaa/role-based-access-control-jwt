import express from "express";
import {
  getAdminById,
  getAllFaculties,
  getAllStudents,
  getFacultyById,
  getStudentById,
} from "../controller/admin.controller.js";

const adminRouter = express.Router();

adminRouter.get("/faculty", getAllFaculties);
adminRouter.get("/student", getAllStudents);

adminRouter.get("/faculty/:id", getFacultyById);
adminRouter.get("/student/:id", getStudentById);
adminRouter.get("/:id", getAdminById);

export default adminRouter;
