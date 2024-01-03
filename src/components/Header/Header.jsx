import imagenBuzon from "../../assets/img/correo-icono.png";
import imagenGob from "../../assets/img/logo-gob-mx.png";
import imagenIdiomas from "../../assets/img/idiomas.png";
import imagenItver from "../../assets/img/logo-itv.png";
import imagenSep from "../../assets/img/logo-educacion.svg";
import imagenSeparador from "../../assets/img/linea-vertical-separador-logos.svg";
import imagenTecnm from "../../assets/img/logo-tecnm.svg";
import image from "../../assets/img/Screenshot_2020-01-24_TecNM_Tecnológico_Nacional_de_México1.png";
import "./Header.css";

const Header = () => {
  const styles = {
    altura60: 60,
    altura70: 70,
  };
  return (
    <>
      <div class="Encabezado">
        <img src={image} alt="Encabezado" style={{ width: "100%" }}></img>
      </div>
      <div class="header-row">
        <div class="logo-section">
          <div class="logo">
            <a href="https://www.gob.mx/">
              <img
                src={imagenGob}
                height={styles.altura60}
                alt="Gobierno de México"
              />
            </a>
          </div>

          <div class="separator">
            <img
              src={imagenSeparador}
              height={styles.altura70}
              alt="separador"
            />
          </div>

          <div class="logo">
            <a href="https://www.gob.mx/sep">
              <img
                src={imagenSep}
                height="60"
                alt="Secretaria de Educación Pública"
              />
            </a>
          </div>

          <div class="separator">
            <img src={imagenSeparador} height="70" alt="separador" />
          </div>

          <div class="logo">
            <a href="https://www.tecnm.mx/">
              <img src={imagenTecnm} height="100" alt="TECNM" />
            </a>
          </div>

          <div class="separator">
            <img src={imagenSeparador} height="70" alt="separador" />
          </div>

          <div class="logo">
            <div class="d-flex px-2 w-80 h-auto">
              <a href="https://www.veracruz.tecnm.mx/index.php">
                <img
                  src={imagenItver}
                  alt="ITVER-logo"
                  height="60"
                  class="ITVER"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="navbar">
        <ul className="navbar_options">
            <li className="navbar_item">Cuerpo académico</li>
            <li className="navbar_item">Profesores</li>
        </ul>
      </div>
    </>
  );
};

export default Header;
