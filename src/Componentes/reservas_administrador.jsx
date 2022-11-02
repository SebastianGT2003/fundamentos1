import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Link, useNavigate } from "react-router-dom";

import Reserva from "../Backend/Modelo/Reserva";

function Reservas_administrador() {
  const [userList, setUserList] = useState([]);
  const reserva= new Reserva("hola","holi","holo","8-10")

  useEffect(() => {

    reserva.actualizar_reservas(setUserList)
     
      .catch(console.error);
  }, []);

  return (
    <div>
      <div class="col col-12 mt-3">
        <Link
          to="/inicio_admin"
          type="button"
          class="btn btn-danger mr-4 position-absolute top-5 end-0"
        >
          Regresar
        </Link>
        </div>
      
       <div class="container">
      <h1>Reservas de todos los usuarios</h1>
      <div class="row-4 mt-4">
        <div class="col">
          <table class="table table-striped">
            <thead>
              <tr>
                <th>Hora</th>
                <th>Nombre</th>
                <th>Tipo_usuario</th>
                <th>Correo</th>
              </tr>
            </thead>
            <tbody>
              {userList.map((user, index) => (
                <tr key={index}>
                  <th>{user.hora}</th>
                  <th>{user.nombre}</th>
                  <th>{user.tipo_usuario}</th>
                  <th>{user.correo}</th>
                  <th>
                    <button
                      type="button"
                      className="btn btn-dark btn-sm"
                      onClick={() => reserva.eliminar_reservas(user.correo,setUserList)}
                    >
                      <i class="bi bi-trash-fill"></i>
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </div>
   
  );
}

export default Reservas_administrador ;
