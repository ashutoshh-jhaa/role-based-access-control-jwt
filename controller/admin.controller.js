import admins from "../data/admins.json" with { type: "json" };
import faculties from "../data/faculties.json" with { type: "json" };
import students from "../data/students.json" with { type: "json" };

export const getAllFaculties = async (req, res) => {
  res.status(200).json(faculties);
};

export const getFacultyById = async (req, res) => {
  const facultyId = parseInt(req.params.id);
  const faculty = faculties.find((f) => f.id === facultyId);

  if (!faculty) {
    res.status(404).json({ message: "invalid faculty id" });
  } else {
    res.status(200).json(faculties);
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

export const getAdminById = async (req, res) => {
  const adminId = parseInt(req.params.id);

  const admin = admins.find((a) => a.id === adminId);

  if (!admin) {
    res.status(404).json({ message: "invalid admin id" });
  } else {
    res.status(200).json(admin);
  }
};
