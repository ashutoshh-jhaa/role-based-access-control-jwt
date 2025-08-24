import students from "../data/students.json" with { type: "json" };

export const getStudentById = async (req, res) => {
  const studentId = parseInt(req.params.id);

  if (studentId != req.user.id) {
    return res.status(403).json({
      message: "can only access your data",
    });
  }

  const student = students.find((s) => s.id === studentId);

  if (!student) {
    res.status(404).json({ message: "invalid student id" });
  } else {
    res.status(200).json(student);
  }
};
