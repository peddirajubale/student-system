
import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import {GlobalStyle} from './/styledComponents'
import StudentForm from "./components/StudentForm";

function App() {
  

  return (
    <Router>
      <GlobalStyle/>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/student-form" element={<StudentForm/>} />
      </Routes>
    </Router>

  );
}
export default App;