import { useState, useEffect } from "react";
import axios from "axios";
import {Container, Title, Form, Input, Button, Table,Th,Td,ActionButtons} from './styledComponents'

const API_URL = "https://student-system-backend-9m1w.onrender.com"; 

function StudentForm() {
  const [students, setStudents] = useState([]);
  const [formData, setFormData] = useState({
    studentId: "",
    name: "",
    email: "",
    phone: "",
    course: "",
  });
  const [editId, setEditId] = useState(null);

  // Fetch all students
  const fetchStudents = async () => {
    try {
      const res = await axios.get(`${API_URL}/get-students`);
      setStudents(res.data);
      console.log(res.data)
    } catch (err) {
      console.error("Error fetching students", err);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  // Handle form input
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Add or Update Student
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editId) {
        await axios.put(`${API_URL}/update/${editId}`, formData);
        setEditId(null);
      } else {
        await axios.post(`${API_URL}/add-student`, formData);
      }
      setFormData({ studentId: "", name: "", email: "", phone: "", course: "" });
      fetchStudents();
    } catch (err) {
      console.error("Error saving student", err);
    }
  };

  // Edit student
  const handleEdit = (student) => {
    setFormData(student);
    setEditId(student._id);
  };

  // Delete student
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/delete/${id}`);
      fetchStudents();
    } catch (err) {
      console.error("Error deleting student", err);
    }
  };

  return (
    <Container>
      <Title>Student Management</Title>

      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="studentId"
          placeholder="Student ID"
          value={formData.studentId}
          onChange={handleChange}
          required
        />
        <Input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <Input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <Input
          type="number"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <Input
          type="text"
          name="course"
          placeholder="Course"
          value={formData.course}
          onChange={handleChange}
          required
        />
        <Button type="submit">{editId ? "Update" : "Add"} Student</Button>
      </Form>

      <Table>
        <thead>
          <tr>
            <Th>Student ID</Th>
            <Th>Name</Th>
            <Th>Email</Th>
            <Th>Phone</Th>
            <Th>Course</Th>
            <Th>Actions</Th>
          </tr>
        </thead>
        <tbody>
          {students.map((stu) => (
            <tr key={stu.studentId}>
              <Td>{stu.studentId}</Td>
              <Td>{stu.name}</Td>
              <Td>{stu.email}</Td>
              <Td>{stu.phone}</Td>
              <Td>{stu.course}</Td>
              <Td>
                <ActionButtons>
                  <Button onClick={() => handleEdit(stu.studentId)}>Edit</Button>
                  <Button danger onClick={() => handleDelete(stu.studentId)}>
                    Delete
                  </Button>
                </ActionButtons>
              </Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default StudentForm;
