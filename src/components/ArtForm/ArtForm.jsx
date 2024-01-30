import React, { useState } from "react";
import "./ArtForm.css";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const ArtForm = () => {
  const [autores, setAutores] = useState("");
  const [tituloArticulo, setTituloArticulo] = useState("");
  const [estadoActual, setEstadoActual] = useState("");
  const [nombreRevista, setNombreRevista] = useState("");
  const [paginaInicio, setPaginaInicio] = useState("");
  const [paginaFinal, setPaginaFinal] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [pais, setPais] = useState("");
  const [editorial, setEditorial] = useState("");
  const [volumen, setVolumen] = useState("");
  const [issn, setIssn] = useState("");
  const [indiceRegistro, setIndiceRegistro] = useState("");
  const [fechaPublicacion, setFechaPublicacion] = useState("");
  const [direccionElectronica, setDireccionElectronica] = useState("");
  const [proposito, setProposito] = useState("");

  const handleAccept = () => {
    // Validar que los campos obligatorios estén llenos
    if (
      autores.trim() === "" ||
      tituloArticulo.trim() === "" ||
      estadoActual.trim() === "" ||
      nombreRevista.trim() === "" ||
      !Number.isInteger(parseInt(paginaInicio)) || // Verificar que paginaInicio sea un entero
      !Number.isInteger(parseInt(paginaFinal)) || // Verificar que paginaFinal sea un entero
      descripcion.trim() === "" ||
      pais.trim() === "" ||
      editorial.trim() === "" ||
      volumen.trim() === "" ||
      issn.trim() === "" ||
      indiceRegistro.trim() === "" ||
      isNaN(new Date(fechaPublicacion)) || // Verificar que fechaPublicacion sea una fecha válida
      direccionElectronica.trim() === "" ||
      proposito.trim() === ""
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
      <div className="art_form_container">
        <div className="art_form_titles_box">
          <h2 className="art_form_title">Artículos</h2>
          <h3 className="art_form_subtitle">Alta de artículos</h3>
        </div>
        <div className="art_form_box">
          <div className="art_form_row">
            <div className="art_form_col">
              <label className="art_form_label">Autor(es)*</label>
              <input
                className="art_form_input"
                type="text"
                value={autores}
                onChange={(e) => setAutores(e.target.value)}
              />
            </div>
            <div className="art_form_col">
              <label className="art_form_label">Título del artículo*</label>
              <input
                className="art_form_input"
                type="text"
                value={tituloArticulo}
                onChange={(e) => setTituloArticulo(e.target.value)}
              />
            </div>
            <div className="art_form_col">
              <label className="art_form_label">Estado actual*</label>
              <input
                className="art_form_input"
                type="text"
                value={estadoActual}
                onChange={(e) => setEstadoActual(e.target.value)}
              />
            </div>
            <div className="art_form_col">
              <label className="art_form_label">Nombre de la Revista*</label>
              <input
                className="art_form_input"
                type="text"
                value={nombreRevista}
                onChange={(e) => setNombreRevista(e.target.value)}
              />
            </div>
            <div className="art_form_col">
              <label className="art_form_label">De la pagina*</label>
              <input
                className="art_form_input"
                type="text"
                value={paginaInicio}
                onChange={(e) => setPaginaInicio(e.target.value)}
              />
            </div>
            <div className="art_form_col">
              <label className="art_form_label">A la pagina*</label>
              <input
                className="art_form_input"
                type="text"
                value={paginaFinal}
                onChange={(e) => setPaginaFinal(e.target.value)}
              />
            </div>
            <div className="art_form_col">
              <label className="art_form_label">Descripción*</label>
              <input
                className="art_form_input"
                type="text"
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
              />
            </div>
            <div className="art_form_col">
              <label className="art_form_label">Pais*</label>
              <input
                className="art_form_input"
                type="text"
                value={pais}
                onChange={(e) => setPais(e.target.value)}
              />
            </div>
            <div className="art_form_col">
              <label className="art_form_label">Editorial*</label>
              <input
                className="art_form_input"
                type="text"
                value={editorial}
                onChange={(e) => setEditorial(e.target.value)}
              />
            </div>
            <div className="art_form_col">
              <label className="art_form_label">Volumen*</label>
              <input
                className="art_form_input"
                type="text"
                value={volumen}
                onChange={(e) => setVolumen(e.target.value)}
              />
            </div>
            <div className="art_form_col">
              <label className="art_form_label">ISSN*</label>
              <input
                className="art_form_input"
                type="text"
                value={issn}
                onChange={(e) => setIssn(e.target.value)}
              />
            </div>
            <div className="art_form_col">
              <label className="art_form_label">
                Indice de registro de la revista*
              </label>
              <input
                className="art_form_input"
                type="text"
                value={indiceRegistro}
                onChange={(e) => setIndiceRegistro(e.target.value)}
              />
            </div>
          </div>
          <div className="art_form_row">
            <div className="art_form_col">
              <label className="art_form_label">Fecha de publicación*</label>
              <input
                className="art_form_input"
                type="date"
                value={fechaPublicacion}
                onChange={(e) => setFechaPublicacion(e.target.value)}
              />
            </div>
            <div className="art_form_col">
              <label className="art_form_label">
                Dirección electronica del articulo
              </label>
              <input
                className="art_form_input"
                type="text"
                value={direccionElectronica}
                onChange={(e) => setDireccionElectronica(e.target.value)}
              />
            </div>
            <div className="art_form_col">
              <label className="art_form_label">Proposito</label>
              <input
                className="art_form_input"
                type="text"
                value={proposito}
                onChange={(e) => setProposito(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="art_form_row">
          <p className="art_form_placeholder">*Campos Obligatorios</p>
        </div>
        <div className="art_form_row_buttons">
          <button className="art_form_cancel">
            <span>Cancelar</span>
          </button>
          <button className="art_form_accept" onClick={handleAccept}>
            <span>Aceptar</span>
          </button>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default ArtForm;
