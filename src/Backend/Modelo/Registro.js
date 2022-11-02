import { BrowserRouter as Router, Link, useNavigate } from "react-router-dom";
import axios from "axios";

class Registro {
  constructor(id) {
    /* Lo que se necesita para iniciar sesion */

    this.id = id;
  }
  navegador = useNavigate();

  actualizar_registro = async (setUserList) => {
    const { data } = await axios.get("http://localhost:4000/usuarios");
    console.log(data);
    setUserList(data);
  };

  eliminar_registro = async (correo, setUserList) => {
    try {
      const { data } = await axios.post("http://localhost:4000/api/eliminar", {
        correo: correo,
      });
      
      console.log(data.message);
      alert("Registro eliminado correctamente");
      this.actualizar_registro(setUserList);
      
    } catch (error) {
      console.log(error);
    }
  };
  consultar_registros = () => {
    return this.navegador("/registros_adm");
  };
}
export default Registro;
