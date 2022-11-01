import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import reserva from "../Backend/Modelo/Reserva";
import { BrowserRouter as Router, Link, useNavigate } from "react-router-dom";

function ejemplomil() {
  return (
    <div class="container">
        <div class="row">
        <div class="col-6">
        <h1>Que quieres hacer admin</h1>
        <Link to="/registros_adm" type="button" class="btn btn-danger ">
          Ver registros
        </Link>
        <div class="col-6 mt-3">
        <Link to="/reservas/admin" type="button" class="btn btn-danger">
          Ver reservas
        </Link>
      </div>
      </div>
      

        </div>
      
    </div>
  );
}
export default ejemplomil;
