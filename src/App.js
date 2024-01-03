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
  );
}

export default App;
