import faculties from "../data/faculties.json" with { type: "json" };
import admins from "../data/admins.json" with { type: "json" };
import students from "../data/students.json" with { type: "json" };
import jwt from "jsonwebtoken";

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

export const adminLogin = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({
      message: "invalid body",
    });
  }

  const admin = admins.find((a) => a.email === email);

  if (!admin) {
    return res.status(404).json({
      message: "admin doesn't exists",
    });
  }

  const isValidPass = admin.password === password;

  if (!isValidPass) {
    return res.status(400).json({
      message: "invalid credentials",
    });
  }

  //if everything goes right create a valid token
  const token = jwt.sign({ id: admin.id, role: admin.role }, JWT_SECRET_KEY);
  res.status(200).json({ token });
};

export const facultyLogin = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({
      message: "invalid body",
    });
  }

  const faculty = faculties.find((f) => f.email === email);

  if (!faculty) {
    return res.status(404).json({
      message: "faculty doesn't exists",
    });
  }

  const isValidPass = faculty.password === password;

  if (!isValidPass) {
    return res.status(400).json({
      message: "invalid credentials",
    });
  }

  //if everything goes right create a valid token
  const token = jwt.sign(
    { id: faculty.id, role: faculty.role },
    JWT_SECRET_KEY,
  );
  res.status(200).json({ token });
};

export const studentLogin = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({
      message: "invalid body",
    });
  }

  const student = students.find((s) => s.email === email);

  if (!student) {
    return res.status(404).json({
      message: "student doesn't exists",
    });
  }

  const isValidPass = student.password === password;

  if (!isValidPass) {
    return res.status(400).json({
      message: "invalid credentials",
    });
  }

  //if everything goes right create a valid token
  const token = jwt.sign(
    { id: student.id, role: student.role },
    JWT_SECRET_KEY,
  );
  res.status(200).json({ token });
};
