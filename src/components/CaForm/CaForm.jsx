import React from "react";
import "./CaForm.css"
import logo from "../../assets/img/LOGO_TECNM_BLANCO.png"
const CaForm= () =>{
    return(
        <div className="ca_form_container">
            <div className="ca_form_card">
                <img className="ca_logo" src={logo} alt="" />
                <form className="ca_form_body">
                <label className="ca_tag_form">Nombre del cuerpo académico</label>
                <input className="ca_input_form" type="text" placeholder="Ingrese el nombre del cuerpo academico" required/>
                <label className="ca_tag_form">Correo Electronico</label>
                <input className="ca_input_form" type="email" placeholder="Ingrese su correo" required/>
                <label className="ca_tag_form">Nombre de Usuario</label>
                <input className="ca_input_form" type="text" placeholder="Ingrese su nombre de usuario" required/>
                <label className="ca_tag_form">Curp</label>
                <input className="ca_input_form" type="text" placeholder="Ingrese su Curp" required/>
                <label className="ca_tag_form">Contraseña</label>
                <input className="ca_input_form" type="password" placeholder="Ingrese su contraseña" required/>
                </form>
                <button className="ca_form_button">Iniciar</button>
            </div>
           

        </div>
    )
}

export default CaForm;