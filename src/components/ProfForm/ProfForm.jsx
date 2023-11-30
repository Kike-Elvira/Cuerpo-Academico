import React, { useState, useEffect } from "react";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import "./ProForm.css";
import logo from "../../assets/img/LOGO_TECNM_BLANCO.png";

const ProfForm = () => {
  const [nombre, setNombre] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [sexo, setSexo] = useState("");
  const [area, setArea] = useState("");
  const [correo, setCorreo] = useState("");
  const [usuario, setUsuario] = useState("");
  const [curp, setCurp] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [correoError, setCorreoError] = useState("");
  const [curpError, setCurpError] = useState("");

  const handleRegistro = () => {
    // Validar que todos los profmpos estén llenos
    if (
      nombre.trim() === "" ||
      usuario.trim() === "" ||
      correo.trim() === "" ||
      curp.trim() === "" ||
      contrasena.trim() === ""
    ) {
      confirmAlert({
        title: "Error",
        message: "Todos los profmpos son obligatorios",
        buttons: [
          {
            label: "Ok",
            onClick: () => {
              console.log("profmpos obligatorios no llenados");
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
              // Aquí puedes poner la lógiprof para el envío o realizar la acción de registro
              console.log("Registro confirmado");
            },
          },
          {
            label: "No",
            onClick: () => {
              console.log("Registro profncelado");
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
    // Expresión regular para validar una CURP (formato general, no verifiprof existencia real)
    const regexCurp =
      /^([A-Z][AEIOUX][A-Z]{2}\d{2}(?:0\d|1[0-2])(?:[0-2]\d|3[01])[HM](?:AS|B[CS]|C[CLMSH]|D[FG]|G[TR]|HG|JC|M[CNS]|N[ETL]|OC|PL|Q[TR]|S[PLR]|T[CSL]|VZ|YN|ZS)[B-DF-HJ-NP-TV-Z]{3}[A-Z\d])(\d)$/;
    return regexCurp.test(curp);
  };

  useEffect(() => {
    console.log(
      "Validando campos:",
      nombre,
      correo,
      usuario,
      curp,
      contrasena
    );
  }, [nombre, apellidos, sexo, area, correo, usuario, curp, contrasena]);

  return (
    <div className="prof_form_container">
      <div className="prof_form_profrd">
        <img className="prof_logo" src={logo} alt="" />
        <form className="prof_form_body">
          <div className="container_2box">
            <div className="input_shared">
              <label className="prof_tag_form shared_tag">Nombre(s)</label>
              <input
                className="prof_input_form shared_input"
                type="text"
                placeholder="Ingresar Nombre(s)"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
              />
            </div>
            <div className="input_shared">
              <label className="prof_tag_form shared_tag">Apellidos</label>
              <input
                className="prof_input_form"
                type="text"
                placeholder="Ingrese apellidos"
                value={apellidos}
                onChange={(e) => setApellidos(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="container_2box">
            <div className="input_shared">
              <label className="prof_tag_form">Sexo</label>
              <input
                className="prof_input_form shared_input"
                type="text"
                placeholder="Ingrese el sexo"
                value={sexo}
                onChange={(e) => setSexo(e.target.value)}
                required
              />
            </div>
            <div className="input_shared">
              <label className="prof_tag_form">Area a la que se dedica</label>
              <input
                className="prof_input_form"
                type="text"
                placeholder="Ingrese el area"
                value={area}
                onChange={(e) => setArea(e.target.value)}
                required
              />
            </div>
          </div>

          <label className="prof_tag_form">Correo Electronico</label>
          <input
            className={`prof_input_form ${
              correoError ? "prof_input_error" : ""
            }`}
            type="email"
            placeholder="Ingrese su correo"
            value={correo}
            onChange={(e) => {
              setCorreo(e.target.value);
              setCorreoError("");
            }}
            required
          />
          {correoError && (
            <div className="prof_error_message">{correoError}</div>
          )}
          <label className="prof_tag_form">Nombre de Usuario</label>
          <input
            className="prof_input_form"
            type="text"
            placeholder="Ingrese su nombre de usuario"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            required
          />
          <label className="prof_tag_form">Curp</label>
          <input
            className={`prof_input_form ${curpError ? "prof_input_error" : ""}`}
            type="text"
            placeholder="Ingrese su Curp"
            value={curp}
            onChange={(e) => {
              setCurp(e.target.value);
              setCurpError("");
            }}
            required
          />
          {curpError && <div className="prof_error_message">{curpError}</div>}
          <label className="prof_tag_form">Contraseña</label>
          <input
            className="prof_input_form"
            type="password"
            placeholder="Ingrese su contraseña"
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
            required
          />
        </form>
        <button className="prof_form_button" onClick={handleRegistro}>
          <span>Registrar</span>
          <i></i>
        </button>
      </div>
    </div>
  );
};

export default ProfForm;
