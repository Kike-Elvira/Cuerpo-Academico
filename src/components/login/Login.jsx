import React from "react";
import "./Login.css"
import logo from "../../assets/img/LOGO_TECNM_BLANCO.png"
const Login = () =>{
    return(
        <div className="login_container">
            <div className="logo_box">
                <img className="logo" src={logo} alt="" />
            </div>
            <div className="form_box">
                <h2 className="form_title">Iniciar Sesión</h2>
              <form className="form_body">
                <label className="tag_form">Nombre de Usuario</label>
                <input className="input_form" type="text" placeholder="Ingrese su nombre de usuario" required/>
                <label className="tag_form">Contraseña</label>
                <input className="input_form" type="password" placeholder="Ingrese su contraseña" required/>
              </form>
              <button className="form_button">Iniciar</button>
            </div>
        </div>
    )
}

export default Login;