import "../Estilos/Inicio_sesion.css";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Link,
  useNavigate,
} from "react-router-dom";
import sesion from "../Modelo/sesion";



function Inicio() {
  const [email, setEmail] = useState(""); /* Se declaran los estados de las constantes */
  const [contraseña, setContraseña] = useState("");
  const navegador= useNavigate();


  const handleSubmit = (ev) => { /* funcion que se ejecuta cuando se da al boton de inicio sesion */
    ev.preventDefault();
    var validate= login(email, contraseña); /* se ejecuta funcion login si retorna true se redirecciona a sesion iniciada */
    if (validate){
      navegador("/sesion_iniciada") /* redirecciona a sesion iniciada */
    }

  };

  return (
    <main>
      <div className="container1">
        <div className="left">
          <h1>¡Que gusto volverte a ver!</h1>
        </div>
        <div className="right">
          <div className="botonderecha">
            <div className="admin">
              <Link to="/" className="btn btn-danger">
                Regresar
              </Link>
            </div>
          </div>

          <div className="centerform">
            <div className="backgroudform">
              <main class="form-signin w-100 m-auto">
                <form onSubmit={handleSubmit}> {/* Cuando se va a enviar el formulario se ejecuta la funcion flecha */}
                  <h1 class="h3 mb-3 fw-normal">Iniciar sesion</h1>
                  <div class="form-floating ">
                    <input
                      type="email"
                      class="form-control"
                      id="email"
                      value={email}
                      onChange={(ev) => setEmail(ev.target.value)} /* Se captura lo que hay en el imput */
                      placeholder="name@example.com"
                      required
                    />
                    <label for="email">Correo electronico</label>
                  </div>
                  <div class="form-floating mt-3">
                    <input
                      type="password"
                      class="form-control"
                      id="contraseña"
                      value={contraseña}
                      onChange={(ev) => setContraseña(ev.target.value)} /* Se captura lo que hay en el imput */
                      placeholder="Contraseña"
                      required
                    />
                    <label for="contraseña">Contraseña</label>
                  </div>

                  <div class="checkbox mb-2">
                    <label>
                      <input type="checkbox" value="remember-me" /> Remember me
                    </label>
                  </div>
                  <div class="mb-3">
                    <button
                      class="w-100 btn btn-lg btn-danger mt-3"
                      type="submit"
                      id ="boton_inicio"
                    >
                      Iniciar sesion
                    </button>
                  </div>
                </form>
              </main>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

/* document.getElementById("boton_inicio").addEventListener("click",x=>
{
  let email = document.getElementById("email")
  let pass = document.getElementById("contraseña")
  login(email.value,pass.value)
}) */
const login = (email, password) => { /* Funcion de validacion de usuario */
  if (email === "estudiante@gmail.com" && password === "hola") 
    return(true)
  else 
    alert("Login incorrecto")
    return(false);

};



export default Inicio;
