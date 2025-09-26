const Student = require("../models/Student");
const bcrypt = require("bcrypt");

// Register Controller
exports.registerStudent = async (req, res) => {
  try {
    const { name, password, confirmPassword } = req.body;

    // Validation
    if (!name || !password || !confirmPassword) {
      return res.status(400).json({ message: "All fields are required" });
    }
    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    const existingStudent = await Student.findOne({ name });
    if (existingStudent) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash Password
    const hashedPassword = await bcrypt.hash(password, 10);

    const newStudent = new Student({
      name,
      password: hashedPassword,
      confirmPassword
    });

    await newStudent.save();
    res.status(201).json({ message: "Student registered successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Login Controller
exports.loginStudent = async (req, res) => {
  try {
    const { name, password } = req.body;

    if (!name || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const student = await Student.findOne({ name });
    if (!student) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, student.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    res.status(200).json({ message: "Login successful" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
