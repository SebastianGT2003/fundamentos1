import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import reserva from "../Backend/Modelo/Reserva";
import { BrowserRouter as Router, Link, useNavigate } from "react-router-dom";
import sesion_admin from "../Backend/Modelo/sesion_admin";
import Registro from "../Backend/Modelo/Registro";

function ejemplomil() {
  const sesio_administrador= new sesion_admin("hola","hola123")
  const registro= new Registro("Hola")
  return (
    <div>
      <div class="col col-12 mt-3">
        <button
          type="button"
          class="btn btn-danger mr-4 position-absolute top-5 end-0"
          onClick={sesio_administrador.cerrar_sesion_admin}
        >
          Cerrar sesion
        </button>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-6">
            <h1>Que quieres hacer admin</h1>
            <button  type="button" class="btn btn-danger " onClick={registro.consultar_registros}>
              Ver registros
            </button>
            <div class="col-6 mt-3">
              <Link to="/reservas/admin" type="button" class="btn btn-danger">
                Ver reservas
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ejemplomil;
