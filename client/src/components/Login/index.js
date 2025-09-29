import { Container, FormBox, Title, Input, Button, LinkText } from "./styledComponents";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const [formData, setFormData] = useState({ name: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://student-system-backend-9m1w.onrender.com/api/auth/login", formData);
      alert("Login successful!");
      localStorage.setItem("studentToken", res.data.token);
      navigate("/student-form")
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <Container>
      <FormBox>
        <Title>Login</Title>
        <form onSubmit={handleSubmit}>
          <Input type="text" name="name" placeholder="Name" onChange={handleChange} />
          <Input type="password" name="password" placeholder="Password" onChange={handleChange} />
          {error && <p style={{ color: "red" }}>{error}</p>}
          <Button type="submit">Login</Button>
        </form>
        <LinkText>
          Don’t have an account? <span onClick={() => navigate("/")}>Register</span>
        </LinkText>
      </FormBox>
    </Container>
  );
};

export default Login;
