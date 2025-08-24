import passport from "passport";
import faculties from "../data/faculties.json" with { type: "json" };
import students from "../data/students.json" with { type: "json" };
import jwt from "jsonwebtoken";

export const getFacultyById = async (req, res) => {
  const facultyId = parseInt(req.params.id);

  if (facultyId != req.user.id) {
    return res.status(403).json({
      message: "can only access your data",
    });
  }

  const faculty = faculties.find((f) => f.id === facultyId);

  if (!faculty) {
    res.status(404).json({ message: "invalid faculty id" });
  } else {
    res.status(200).json(faculty);
  }
};

export const getAllStudents = async (req, res) => {
  res.status(200).json(students);
};

export const getStudentById = async (req, res) => {
  const studentId = parseInt(req.params.id);
  const student = students.find((s) => s.id === studentId);

  if (!student) {
    res.status(404).json({ message: "invalid student id" });
  } else {
    res.status(200).json(student);
  }
};
