import "../Estilos/Inicio_sesionadmin.css";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Link,
  useNavigate,
} from "react-router-dom";
import sesion_admin from "../Backend/Modelo/sesion_admin";



function Inicio_admin() {

  const [body, setBody] = useState({ username: "", password: "" });
  const sesion_administrador= new sesion_admin(body)


  const inputChange = ({ target }) => {
    const { name, value } = target;
    setBody({
      ...body,
      [name]: value,
    });
  };
  const handleSubmit = (ev) => {
    ev.preventDefault();
    sesion_administrador.iniciar_sesion(body)
  };

 

  return (
    <main>
      <div className="container1ad">
      <div className="rightad">
          <div className="botonderechaad">
            <div className="adminad">
              <Link to="/" type="button" className="btn btn-danger btn btn-danger mr-4 position-absolute top-4 start-0">
                Regresar
              </Link>
            </div>
          </div>

          <div className="centerformad">
            <div className="backgroudformad">
              <main class="form-signin w-100 m-auto">
                <form onSubmit={handleSubmit}> {/* Cuando se va a enviar el formulario se ejecuta la funcion flecha */}
                  <h1 class="h3 mb-3 fw-normal">Iniciar sesion</h1>
                  <div class="form-floating ">
                    <input
                      type="email"
                      class="form-control"
                      name="username"
                      id="username"
                      value={body.username}
                      onChange={inputChange}
                      placeholder="name@example.com"
                      required
                    />
                    <label for="email">Correo electronico</label>
                  </div>
                  <div class="form-floating mt-3">
                    <input
                      type="password"
                      class="form-control"
                      name="password"
                      id="password"
                      value={body.password}
                      onChange={inputChange}
                      placeholder="Contraseña"
                      required
                    />
                    <label for="contraseña">Contraseña</label>
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
        <div className="leftad">
          <h1>¡Que gusto volverte a ver admin!</h1>
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


export default Inicio_admin;
