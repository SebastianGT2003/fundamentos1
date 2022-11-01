import "../Estilos/Header.css";
import logo from "../imagenes/UDEM_UVirtual_.png";
import React from "react";

function Header() {
  return (
      <nav>
        <div className="izquierda">
          
          <img src={logo} class="img-fluid"  alt="" />
        </div>
        <div className="derecha">
          
          <p className="parrafo"> Teléfono: (604) 5904500<p>Correo: reservas_gimnasio@udemedellin.edu.o</p></p> 
        </div>
      </nav>
  );
}

export default Header;
