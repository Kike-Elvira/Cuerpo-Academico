<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';
import Login from './components/login/Login';
import CaForm from './components/CaForm/CaForm';
import ProfForm from './components/ProfForm/ProfForm';
import ProjectForm from './components/ProjectForm/ProjectForm';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
   {/*<Login></Login>*/}
  {/* <CaForm></CaForm>*/}
    <Header></Header>
    <ProjectForm></ProjectForm>
    <Footer></Footer>
   {/*   <ProfForm></ProfForm> */}
 
    </>
=======
import "./App.css";
import Login from "./components/login/Login";
import CaForm from "./components/CaForm/CaForm";
import ProfForm from "./components/ProfForm/ProfForm";
import ProjectForm from "./components/ProjectForm/ProjectForm";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

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
>>>>>>> 4cd48ad87c39d6ff638a151456ece279efedd1bf
  );
}

export default App;
