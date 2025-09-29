import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, FormBox, Title, Input, Button, LinkText } from "./styledComponents";


const Register = () => {
  const [formData, setFormData] = useState({ name: "", password: "", confirmPassword: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://student-system-backend-9m1w.onrender.com/api/auth/register", formData);
      alert("Registration successful! Please login.");
      navigate("/login");
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <Container>
      <FormBox>
        <Title>Register</Title>
        <form onSubmit={handleSubmit}>
          <Input type="text" name="name" placeholder="Name" onChange={handleChange} />
          <Input type="password" name="password" placeholder="Password" onChange={handleChange} />
          <Input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} />
          {error && <p style={{ color: "red" }}>{error}</p>}
          <Button type="submit">Register</Button>
        </form>
        <LinkText>
          Already have an account? <span onClick={() => navigate("/login")}>Login</span>
        </LinkText>
      </FormBox>
    </Container>
  );
};

export default Register;
