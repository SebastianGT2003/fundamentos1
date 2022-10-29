import React from "react";
import ReactDOM from "react-dom/client";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Inicio_sesion from "./Paginas/Login";
import Registro from "./Paginas/Registro";
import Cerrar from "./Paginas/cerrar_sesios";
import Principal from "./Paginas/Principal";
import Inicio_sesion_admin from "./Paginas/login_admin";
import Ejemplo from './Paginas/ejemplo';






import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/Inicio_sesion_admin" element={<Inicio_sesion_admin />} />
        <Route path="/Inicio_sesion" element={<Inicio_sesion />} />
        <Route path="/Registro" element={<Registro />} />
        <Route path="/sesion_iniciada" element={<Cerrar />} />
        <Route path="/ejemplo" element={<Ejemplo />} />
        <Route path="/" element={<Principal />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
