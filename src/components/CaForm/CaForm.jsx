import React, { useState, useEffect } from "react";
import "./CaForm.css";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import logo from "../../assets/img/LOGO_TECNM_BLANCO.png";

const CaForm = () => {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [usuario, setUsuario] = useState("");
  const [curp, setCurp] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [correoError, setCorreoError] = useState("");
  const [curpError, setCurpError] = useState("");

  const handleRegistro = () => {
    // Validar que todos los campos estén llenos
    if (
      nombre.trim() === "" ||
      usuario.trim() === "" ||
      correo.trim() === "" ||
      curp.trim() === "" ||
      contrasena.trim() === ""
    ) {
      confirmAlert({
        title: "Error",
        message: "Todos los campos son obligatorios",
        buttons: [
          {
            label: "Ok",
            onClick: () => {
              console.log("Campos obligatorios no llenados");
            },
          },
        ],
      });
    } else if (!validarCorreo(correo)) {
      setCorreoError("Por favor, ingrese un correo válido");
    } else if (!validarCurp(curp)) {
      setCurpError("Por favor, ingrese una CURP válida");
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

  const validarCorreo = (correo) => {
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexCorreo.test(correo);
  };

  const validarCurp = (curp) => {
    // Expresión regular para validar una CURP (formato general, no verifica existencia real)
    const regexCurp =
      /^([A-Z][AEIOUX][A-Z]{2}\d{2}(?:0\d|1[0-2])(?:[0-2]\d|3[01])[HM](?:AS|B[CS]|C[CLMSH]|D[FG]|G[TR]|HG|JC|M[CNS]|N[ETL]|OC|PL|Q[TR]|S[PLR]|T[CSL]|VZ|YN|ZS)[B-DF-HJ-NP-TV-Z]{3}[A-Z\d])(\d)$/;
    return regexCurp.test(curp);
  };

  useEffect(() => {
    console.log("Validando campos:", nombre, correo, usuario, curp, contrasena);
  }, [nombre, correo, usuario, curp, contrasena]);

  return (
    <div className="ca_form_container">
      <div className="ca_form_card">
        <img className="ca_logo" src={logo} alt="" />
        <form className="ca_form_body">
          <label className="ca_tag_form">Nombre del cuerpo académico</label>
          <input
            className="ca_input_form"
            type="text"
            placeholder="Ingrese el nombre del cuerpo academico"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
          <label className="ca_tag_form">Correo Electronico</label>
          <input
            className={`ca_input_form ${correoError ? "ca_input_error" : ""}`}
            type="email"
            placeholder="Ingrese su correo"
            value={correo}
            onChange={(e) => {
              setCorreo(e.target.value);
              setCorreoError("");
            }}
            required
          />
          {correoError && <div className="ca_error_message">{correoError}</div>}
          <label className="ca_tag_form">Nombre de Usuario</label>
          <input
            className="ca_input_form"
            type="text"
            placeholder="Ingrese su nombre de usuario"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            required
          />
          <label className="ca_tag_form">Curp</label>
          <input
            className={`ca_input_form ${curpError ? "ca_input_error" : ""}`}
            type="text"
            placeholder="Ingrese su Curp"
            value={curp}
            onChange={(e) => {
              setCurp(e.target.value);
              setCurpError("");
            }}
            required
          />
          {curpError && <div className="ca_error_message">{curpError}</div>}
          <label className="ca_tag_form">Contraseña</label>
          <input
            className="ca_input_form"
            type="password"
            placeholder="Ingrese su contraseña"
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
            required
          />
        </form>
        <button className="ca_form_button" onClick={handleRegistro}>
          <span>Registrar</span>
          <i></i>
        </button>
      </div>
    </div>
  );
};

export default CaForm;
