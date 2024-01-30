import React, { useState } from "react";
import "./TesForm.css";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const TestForm = () => {
  const [nombreAlumno, setNombreAlumno] = useState("");
  const [asesor, setAsesor] = useState("");
  const [titulo, setTitulo] = useState("");
  const [estado, setEstado] = useState("");
  const [correo, setCorreo] = useState("");
  const [nivel, setNivel] = useState("");
  const [carrera, setCarrera] = useState("");
  const [correoError, setCorreoError] = useState("");

  const handleAccept = () => {
    // Validar que los campos obligatorios estén llenos
    if (
      nombreAlumno.trim() === "" ||
      asesor.trim() === "" ||
      titulo.trim() === "" ||
      estado.trim() === "" ||
      correo.trim() === "" ||
      nivel.trim() === "" ||
      carrera.trim() === ""
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
    } 
    else if (!validarCorreo(correo)) {
      setCorreoError("Por favor, ingrese un correo válido");
    }else {
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

  const validarCorreo = (correo) => {
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexCorreo.test(correo);
  };
  return (
    <>
      <Header></Header>
      <div className="tes_form_container">
        <div className="tes_form_titles_box">
          <h2 className="tes_form_title">Tesis</h2>
          <h3 className="tes_form_subtitle">Alta de tesis</h3>
        </div>
        <div className="tes_form_box">
          <div className="tes_form_row">
            <div className="tes_form_col">
              <label className="tes_form_label">Nombre del alumno*</label>
              <input
                className="tes_form_input"
                type="text"
                value={nombreAlumno}
                onChange={(e) => setNombreAlumno(e.target.value)}
              />
            </div>
            <div className="tes_form_col">
              <label className="tes_form_label">Ascesor(es)*</label>
              <input
                className="tes_form_input"
                type="text"
                value={asesor}
                onChange={(e) => setAsesor(e.target.value)}
              />
            </div>
            <div className="tes_form_col">
              <label className="tes_form_label">Titulo de la Tesis*</label>
              <input
                className="tes_form_input"
                type="text"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
              />
            </div>
            <div className="tes_form_col">
              <label className="tes_form_label">Estado actual*</label>
              <input
                className="tes_form_input"
                type="text"
                value={estado}
                onChange={(e) => setEstado(e.target.value)}
              />
            </div>
            <div className="tes_form_col">
              <label className="tes_form_label">Correo*</label>
              <input
                className={`tes_form_input ${correoError ? "tes_input_error" : ""}`}
                type="email"
                value={correo}
                onChange={(e) => {
                setCorreo(e.target.value);
                setCorreoError("");
                }}
              />
               {correoError && <p className="error_message">{correoError}</p>} {/* Muestra el error si correoError no está vacío */}
            </div>
            <div className="tes_form_col">
              <label className="tes_form_label">
                Nivel (Licenciatura o Posgrado)*
              </label>
              <input
                className="tes_form_input"
                type="text"
                value={nivel}
                onChange={(e) => setNivel(e.target.value)}
              />
            </div>
            <div className="tes_form_col">
              <label className="tes_form_label">Carrera*</label>
              <input
                className="tes_form_input"
                type="text"
                value={carrera}
                onChange={(e) => setCarrera(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="tes_form_row">
          <p className="tes_form_placeholder">*Campos Obligatorios</p>
        </div>
        <div className="tes_form_row_buttons">
          <button className="tes_form_cancel">
            <span>Cancelar</span>
          </button>
          <button className="tes_form_accept" onClick={handleAccept}>
            <span>Aceptar</span>
          </button>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default TestForm;
