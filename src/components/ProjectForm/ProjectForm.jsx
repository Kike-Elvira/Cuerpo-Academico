import React, { useState } from "react";
import "./ProjectForm.css";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const ProjectForm = () => {
  const [tituloProyecto, setTituloProyecto] = useState("");
  const [nombrePatrocinador, setNombrePatrocinador] = useState("");
  const [fechaInicio, setFechaInicio] = useState("");
  const [fechaFin, setFechaFin] = useState("");
  const [tipoPatrocinador, setTipoPatrocinador] = useState("");
  const [investigadoresParticipantes, setInvestigadoresParticipantes] =
    useState("");
  const [alumnosParticipantes, setAlumnosParticipantes] = useState("");
  const [actividadesRealizadas, setActividadesRealizadas] = useState("");
  const [considerarCurriculum, setConsiderarCurriculum] = useState("");

  const handleAccept = () => {
    // Validar que los campos obligatorios estén llenos
    if (
      tituloProyecto.trim() === "" ||
      nombrePatrocinador.trim() === "" ||
      isNaN(new Date(fechaInicio)) || // Verificar que fechaInicio sea una fecha válida
      isNaN(new Date(fechaFin)) || // Verificar que fechaFin sea una fecha válida
      actividadesRealizadas.trim() === "" ||
      considerarCurriculum.trim() === ""
    ) {
      confirmAlert({
        title: "Error",
        message: "Todos los campos obligatorios son requeridos",
        buttons: [
          {
            label: "Ok",
            onClick: () => {
              console.log("Campos obligatorios no llenados");
            },
          },
        ],
      });
    } else {
      confirmAlert({
        title: "Confirmación",
        message: "¿Estás seguro de que deseas registrar?",
        buttons: [
          {
            label: "Sí",
            onClick: () => {
              // Aquí puedes poner la lógica para el envío o realizar la acción de registro
              console.log("Registro confirmado");
            },
          },
          {
            label: "No",
            onClick: () => {
              console.log("Registro cancelado");
            },
          },
        ],
      });
    }
  };

  return (
    <>
    <Header></Header>
    <div className="project_form_container">
      <div className="project_form_titles_box">
        <h2 className="project_form_title">Proyectos</h2>
        <h3 className="project_form_subtitle">Alta de proyectos</h3>
      </div>
      <div className="project_form_box">
        <div className="project_form_row">
          <div className="project_form_col">
            <label className="project_form_label">Titulo del proyecto*</label>
            <input
              className="project_form_input"
              type="text"
              value={tituloProyecto}
              onChange={(e) => setTituloProyecto(e.target.value)}
            />
          </div>
          <div className="project_form_col">
            <label className="project_form_label">
              Nombre del patrocinador*
            </label>
            <input className="project_form_input" type="text" 
             value={nombrePatrocinador}
             onChange={(e) => setNombrePatrocinador(e.target.value)}
            />
          </div>
          <div className="project_form_col">
            <label className="project_form_label">Fecha de inicio*</label>
            <input className="project_form_input" type="date" 
             value={fechaInicio}
             onChange={(e) => setFechaInicio(e.target.value)}
            />
          </div>
        </div>
        <div className="project_form_row">
          <div className="project_form_col">
            <label className="project_form_label">
              Fecha de fin de proyecto*
            </label>
            <input className="project_form_input" type="date" 
             value={fechaFin}
             onChange={(e) => setFechaFin(e.target.value)}
            />
          </div>
          <div className="project_form_col">
            <label className="project_form_label">Tipo de patrocinador</label>
            <input className="project_form_input" type="text" 
             value={tipoPatrocinador}
             onChange={(e) => setTipoPatrocinador(e.target.value)}
            />
          </div>
          <div className="project_form_col">
            <label className="project_form_label">
              Investigadores participantes
            </label>
            <input className="project_form_input" type="text" 
             value={investigadoresParticipantes}
             onChange={(e) => setInvestigadoresParticipantes(e.target.value)}
            />
          </div>
        </div>
        <div className="project_form_row">
          <div className="project_form_col">
            <label className="project_form_label">Alumnos participantes</label>
            <input className="project_form_input" type="text" 
             value={alumnosParticipantes}
             onChange={(e) => setAlumnosParticipantes(e.target.value)}
            />
          </div>
          <div className="project_form_col">
            <label className="project_form_label">
              Actividades realizadas*
            </label>
            <input className="project_form_input" type="text" 
             value={actividadesRealizadas}
             onChange={(e) => setActividadesRealizadas(e.target.value)}
            />
          </div>
          <div className="project_form_col">
            <label className="project_form_label">
              ¿Considerar para el curriculum de CA?*
            </label>
            <input className="project_form_input" type="text" 
             value={considerarCurriculum}
             onChange={(e) => setConsiderarCurriculum(e.target.value)}
            />
          </div>
        </div>
        <div className="project_form_row">
          <p className="project_form_placeholder">*Campos Obligatorios</p>
        </div>
        <div className="project_form_row_buttons">
          <button className="project_form_cancel">
            <span>Cancelar</span>
          </button>
          <button className="project_form_accept" onClick={handleAccept}>
            <span>Aceptar</span>
          </button>
        </div>
      </div>
    </div>
    <Footer></Footer>
    </>
  );
};

export default ProjectForm;
