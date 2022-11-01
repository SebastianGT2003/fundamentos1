
import {
    BrowserRouter as Router,
    Link,
    useNavigate,
  } from "react-router-dom";


import axios from 'axios';

class admin{
    constructor(nombre,liga, tipo_usu){/* Todo lo que necesita un usuario */

        this.nombre=nombre
        this.tipo_usu=tipo_usu
        this.liga=liga
    }
    navegador= useNavigate();

    

}
export default admin;