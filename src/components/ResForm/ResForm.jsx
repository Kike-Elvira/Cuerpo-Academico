import React, { useState } from "react";
import "./ResForm.css";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const RestForm = () => {
  const [nivel, setNivel] = useState("");
  const [area, setArea] = useState("");
  const [disciplina, setDisciplina] = useState("");
  const [inicio, setInicio] = useState("");
  const [fechaObtencion, setFechaObtencion] = useState("");

  const handleAccept = () => {
    // Validar que los campos obligatorios estén llenos
    if (
      nivel.trim() === "" ||
      area.trim() === "" ||
      disciplina.trim() === "" ||
      isNaN(new Date(inicio)) || // Verificar que inicio sea una fecha válida
      isNaN(new Date(fechaObtencion)) // Verificar que fechaObtencion sea una fecha válida
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
      <div className="res_form_container">
        <div className="res_form_titles_box">
          <h2 className="res_form_title">Resumen de Estudios</h2>
          <h3 className="res_form_subtitle">Alta de Resumen de Estudios</h3>
        </div>
        <div className="res_form_box">
          <div className="res_form_row">
            <div className="res_form_col">
              <label className="res_form_label">Nivel*</label>
              <input
                className="res_form_input"
                type="text"
                value={nivel}
                onChange={(e) => setNivel(e.target.value)}
              />
            </div>
            <div className="res_form_col">
              <label className="res_form_label">Area*</label>
              <input
                className="res_form_input"
                type="text"
                value={area}
                onChange={(e) => setArea(e.target.value)}
              />
            </div>
            <div className="res_form_col">
              <label className="res_form_label">Disciplina*</label>
              <input
                className="res_form_input"
                type="text"
                value={disciplina}
                onChange={(e) => setDisciplina(e.target.value)}
              />
            </div>
            <div className="res_form_col">
              <label className="res_form_label">Inicio*</label>
              <input
                className="res_form_input"
                type="date"
                value={inicio}
                onChange={(e) => setInicio(e.target.value)}
              />
            </div>
            <div className="res_form_col">
              <label className="res_form_label">Fecha de obtención*</label>
              <input
                className={"res_form_input"}
                type="date"
                value={fechaObtencion}
                onChange={(e) => {
                  setFechaObtencion(e.target.value);
                }}
              />
            </div>
          </div>
        </div>
        <div className="res_form_row">
          <p className="res_form_placeholder">*Campos Obligatorios</p>
        </div>
        <div className="res_form_row_buttons">
          <button className="res_form_cancel">
            <span>Cancelar</span>
          </button>
          <button className="res_form_accept" onClick={handleAccept}>
            <span>Aceptar</span>
          </button>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default RestForm;
