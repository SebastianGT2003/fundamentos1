import React, { useState } from "react";
import "../Estilos/Registro.css";
import { BrowserRouter as Router, Link, useNavigate } from "react-router-dom";
import Usuario from "../Backend/Modelo/Usuario";
import axios from "axios";

function Registro() {
  const [confir_contraseña, setconfir_contraseña] = useState("");

  const [body, setBody] = useState({
    documento: "",
    nombre: "",
    tipo_documento: "",
    liga: "",
    tipo_usuario: "",
    correo: "",
    contraseña: "",
  });

  const usuario = new Usuario(body);

  const inputChange = ({ target }) => {
    const { name, value } = target;
    setBody({
      ...body,
      [name]: value,
    });
  };
  const handleSubmit = (ev) => {
    ev.preventDefault();
    usuario.Registrar(body);
    usuario.get_usuario(body);
  };

  const Mensaje_error = verificar(body, confir_contraseña);

  return (
    <div className="contenedor_registro">
      <div className="hola">
        <div className="botonderechareg">
          <div className="adminreg">
            <Link to="/" type="button" class="btn btn-danger ">
              {" "}
              {/* Redireccion a pagina principal */}
              Regresar
            </Link>
          </div>
        </div>
        <div className="centerform_reg">
          <div className="backgroudform_reg">
            <form class="row g-3 needs-validation" onSubmit={handleSubmit}>
              {" "}
              {/* Se ejecuta cuando se envia el formulario la funcion */}
              <div class="col-12 fw-bold">
                <label for="nombreInput" class="form-label ">
                  Nombre completo
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="nombre"
                  placeholder="Ingrese su nombre"
                  value={body.nombre}
                  onChange={inputChange}
                  name="nombre"
                  /*  value={nombre}  
                  onChange={(ev) => setnombre(ev.target.value)} */ /* Se captura lo que hay en el imput */
                  required
                />
              </div>
              <div class="col-6 mt-4 ">
                <select
                  class="form-select"
                  id="tipo_documento"
                  name="tipo_documento"
                  value={body.tipo_documento}
                  onChange={inputChange}
                  /* value={tipo_documento}
                  onChange={(ev) => {
                    settipo_documento(ev.target.value);  
                  }} */
                  required
                  aria-label="Tipo de documento"
                >
                  <option selected disabled value="">
                    Tipo de documento
                  </option>
                  <option value="cc">CC - Cédula de ciudadanía</option>
                  <option value="ce">CE - Cédula de extranjería</option>
                  <option value="pa">PA - Pasaporte</option>
                </select>
              </div>
              <div class="col-6 mt-4">
                <input
                  type="number"
                  class="form-control"
                  id="documento"
                  name="documento"
                  value={body.documento}
                  onChange={inputChange}
                  /* value={numero_documento}
                  onChange={(ev) => {
                    setnumero_documento(ev.target.value); 
                  }} */

                  placeholder="Ingrese su numero de documento"
                  required
                />
              </div>
              <div class="col-6 mt-4 ">
                <select
                  id="tipo_usuario"
                  class="form-select"
                  name="tipo_usuario"
                  value={body.tipo_usuario}
                  onChange={inputChange}
                  /* onChange={(ev) => {
                    settipo_usuario(ev.target.value); 
                  }} */
                  aria-label="Tipo de usuario"
                  required
                >
                  <option selected disabled value="">
                    Tipo de usuario
                  </option>
                  <option value="estu">Estudiante</option>
                  <option value="profe">Profesor</option>
                  <option value="egre">Egresado</option>
                  <option value="emp">Empleado</option>
                </select>
              </div>
              <div class="col-6 mt-4 ">
                <select
                  id="liga"
                  class="form-select "
                  name="liga"
                  value={body.liga}
                  onChange={inputChange}
                  /* value={liga}
                  onChange={(ev) => {
                    setliga(ev.target.value);
                  }} */
                  aria-label="liga"
                  required
                >
                  <option selected disabled value="">
                    Liga a la que pertenece
                  </option>
                  <option value="udem">Liga udem</option>
                  <option value="otra">Otra</option>
                  <option value="ninguna">Ninguna</option>
                </select>
              </div>
              <div class="col-12 fw-bold mt-2">
                <label for="emailImput" class="form-label ">
                  Correo electronico
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="correo"
                  name="correo"
                  value={body.correo}
                  onChange={inputChange}
                  /* value={email}
                  onChange={(ev) => {
                  }} */
                  placeholder="name@example.com"
                  required
                />
              </div>
              <div class="col-12 fw-bold mt-2">
                <label for="PasswordImput" class="form-label ">
                  Contraseña
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="contraseña"
                  name="contraseña"
                  value={body.contraseña}
                  onChange={inputChange}
                  /* onChange={(ev) => {
                    setcontraseña(ev.target.value);  
                  }} */
                  placeholder="Password"
                  required
                />
              </div>
              <div class="col-12 fw-bold mt-2">
                <label for="confir_PasswordImput" class="form-label ">
                  Confirmar contraseña
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="confir_PasswordImput"
                  value={confir_contraseña}
                  onChange={(ev) => {
                    setconfir_contraseña(
                      ev.target.value
                    ); /* Se captura lo que hay en el imput */
                  }}
                  placeholder="Password"
                  required
                />
              </div>
              {Mensaje_error}
              <div class="col-12">
                <div class="form-check  ">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="terms"
                    required
                  ></input>
                  <label
                    class="form-check-label"
                    for="terms"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                  >
                    <p>
                      <a href="id_" data-bs-toggle="tooltip" title="Tooltip">
                        Acepto el reglamento
                      </a>
                    </p>
                  </label>
                </div>
              </div>
              <div class="mt-0">
                <button
                  type="submit"
                  class="w-100 btn btn-lg btn-danger mt-3"
                  disabled={Mensaje_error}
                  /* onClick={()=>usuario.Registrar(body)} */
                >
                  Registrarme
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

const verificar = (body, confir_contraseña) => {
  if (body.contraseña !== confir_contraseña)
    return (
      <div class="alert alert-danger " role="alert">
        Las contraseña no son iguales
      </div>
    );
  else return false;
};
export default Registro;
