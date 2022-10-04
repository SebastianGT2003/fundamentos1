import "../Estilos/Inicio_sesion.css";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Link,
} from "react-router-dom";

function Inicio() {
  const [email, setEmail] = useState("");
  const [contraseña, setContraseña] = useState("");

  const handleSubmit = (ev) => {
    ev.preventDefault();
    login(email, contraseña);
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
                <form onSubmit={handleSubmit}>
                  <h1 class="h3 mb-3 fw-normal">Iniciar sesion</h1>
                  <div class="form-floating ">
                    <input
                      type="email"
                      class="form-control"
                      id="email"
                      value={email}
                      onChange={(ev) => setEmail(ev.target.value)}
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
                      onChange={(ev) => setContraseña(ev.target.value)}
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
const login = (email, password) => {
  if (email === "estudiante@gmail.com" && password === "hola") 
    alert("login correcto");
  else 
    alert("Login incorrecto")

};



export default Inicio;
