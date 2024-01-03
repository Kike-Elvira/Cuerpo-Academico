import "./App.css";
import Login from "./components/login/Login";
import CaForm from "./components/CaForm/CaForm";
import ProfForm from "./components/ProfForm/ProfForm";
import ProjectForm from "./components/ProjectForm/ProjectForm";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/project" element={<ProjectForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/ca" element={<CaForm />} />
        <Route path="/prof" element={<ProfForm />} />
        {/* Ruta por defecto, redirige a /login */}
        <Route index element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
