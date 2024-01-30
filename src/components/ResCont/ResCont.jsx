import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./ResCont.css";

const ResCont = () => {
  const datos = [
    {
      nivel: "Doctorado",
      area: "Inegnieria de software",
      disciplina: "Ciencias de la computación",
      inicio: "06/08/2018",
      obtencion: "06/08/2020",
    },
    {
      nivel: "Especialidad",
      area: "ingenieria de software",
      disciplina: "Incontatica",
      inicio: "04/02/2020",
      obtencion: "04/02/2021",
    },
    {
        nivel: "Maestria",
        area: "Ingenieria de software",
        disciplina: "Incontatica",
        inicio: "06/08/2018",
        obtencion: "06/08/2020",
    },
    {
        nivel: "Licenciatura",
        area: "Ingenieria de software",
        disciplina: "Incontatica",
        inicio: "06/08/2018",
        obtencion: "06/08/2020",
    }
    // Agrega más objetos aquí para más filas
  ];
  const handleAccept = () => {};
  return (
    <>
      <Header></Header>
      <div className="res_cont_container">
        <div className="res_cont_titles_box">
          <h2 className="res_cont_title">Resumen de estudios realizados</h2>
          <h4 className="res_cont_text">Alta de Resumen de Estudios</h4>
        </div>
        <h4 className="res_cont_subtittle">Datos generales</h4>
        <div className="res_cont_box">
          
              <table className="res_cont_table">
                <thead>
                  <tr className="res_cont_table_tr">
                    <th>Nivel de estudios</th>
                    <th>Área</th>
                    <th>Disciplina</th>
                    <th>Inicio de estudios</th>
                    <th>Fecha de obtención</th>
                  </tr>
                </thead>
                <tbody>
                  {datos.map((fila, index) => (
                    <tr className="res_cont_table_tr" key={index}>
                      <td>{fila.nivel}</td>
                      <td>{fila.area}</td>
                      <td>{fila.disciplina}</td>
                      <td>{fila.inicio}</td>
                      <td>{fila.obtencion}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
          
        </div>
        <div className="res_cont_row_buttons">
          <button className="res_cont_cancel">
            <span>Eliminar</span>
          </button>
          <button className="res_cont_accept" onClick={handleAccept}>
            <span>Modificar</span>
          </button>
          <button className="res_cont_accept" onClick={handleAccept}>
            <span>Aceptar</span>
          </button>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default ResCont;
