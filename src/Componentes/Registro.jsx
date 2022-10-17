import React, { useState } from "react";
import "../Estilos/Registro.css";
import { BrowserRouter as Router, Link, useNavigate, } from "react-router-dom";
import usuario from "../Modelo/Usuario";

function Registro() {
  const [nombre, setnombre] = useState(""); /* Se declara el estado de esas constantes*/
  const [tipo_documento, settipo_documento] = useState("");
  const [numero_documento, setnumero_documento] = useState("");
  const [tipo_usuario, settipo_usuario] = useState("");
  const [liga, setliga] = useState("");
  const [email, setemail] = useState("");
  const [contraseña, setcontraseña] = useState("");
  const [confir_contraseña, setconfir_contraseña] = useState("");/* Se declara el estado de esas constantes*/

  const Mensaje_error = verificar(contraseña, confir_contraseña); /* Se ejecuta la funcion verificar */

  const navegador= useNavigate(); /* Se usa para cambiar de interfaz */


  const handleSubmit = (ev) => {
    ev.preventDefault();
    var validate= verificar(email, contraseña);  /* Funcion flecha se ejecuta cuando se trata de enviar el formulario */
    if (validate){
      navegador("/Inicio_sesion")
    }


    const Usuario = new usuario(); /* Creacion de clase usuario para captura todos los datos */
    Usuario.email = email;
    Usuario.nombre = nombre;
    Usuario.contraseña = contraseña;
    Usuario.num_doc = numero_documento;
    Usuario.tipo_usu = tipo_usuario;
    Usuario.liga = liga;
    Usuario.tipo_doc = tipo_documento;

    console.log(Usuario); //Usuario
  };

  return (
    <div className="contenedor_registro">
      <div className="hola">
        <div className="botonderechareg">
          <div className="adminreg">
            <Link to="/" type="button" class="btn btn-danger "> {/* Redireccion a pagina principal */}
              Regresar
            </Link>
          </div>
        </div>
        <div className="centerform_reg">
          <div className="backgroudform_reg">
            <form class="row g-3 needs-validation" onSubmit={handleSubmit}> {/* Se ejecuta cuando se envia el formulario la funcion */}
              <div class="col-12 fw-bold">
                <label for="nombreInput" class="form-label ">
                  Nombre completo
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="nombreInput"
                  placeholder="Ingrese su nombre"
                  value={nombre}  
                  onChange={(ev) => setnombre(ev.target.value)} /* Se captura lo que hay en el imput */
                  required
                />
              </div>
              <div class="col-6 mt-4 ">
                <select
                  class="form-select"
                  id="tipo_documento"
                  value={tipo_documento}
                  onChange={(ev) => {
                    settipo_documento(ev.target.value);  /* Se captura lo que hay en el imput */
                  }}
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
                  id="numero_documentoInput"
                  value={numero_documento}
                  onChange={(ev) => {
                    setnumero_documento(ev.target.value);  /* Se captura lo que hay en el imput */
                  }}
                  
                  placeholder="Ingrese su numero de documento"
                  required
                />
              </div>
              <div class="col-6 mt-4 ">
                <select
                  id="tipo_usuario"
                  class="form-select"
                  value={tipo_usuario}
                  onChange={(ev) => {
                    settipo_usuario(ev.target.value);  /* Se captura lo que hay en el imput */
                  }}
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
                  value={liga}
                  onChange={(ev) => {
                    setliga(ev.target.value);
                  }}
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
                  id="emailImput"
                  value={email}
                  onChange={(ev) => {
                    setemail(ev.target.value);  /* Se captura lo que hay en el imput */
                  }}
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
                  id="PasswordImput"
                  value={contraseña}
                  onChange={(ev) => {
                    setcontraseña(ev.target.value);  /* Se captura lo que hay en el imput */
                  }}
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
                    setconfir_contraseña(ev.target.value);  /* Se captura lo que hay en el imput */
                  }}
                  placeholder="Password"
                  required
                />
              </div>
              {Mensaje_error}
              <div class="mt-3">
                <button type="submit"
                  class="w-100 btn btn-lg btn-danger mt-3"
                  disabled={Mensaje_error}
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


const verificar = (contraseña, confir_contraseña) => {
  if (contraseña !== confir_contraseña)
    return (
        <div class="alert alert-danger " role="alert">
          Las contraseña no son iguales
        </div>
        
    );
  else
    return (false)
};
export default Registro;
