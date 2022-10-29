import "../Estilos/Inicio_sesion.css";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Link,
  useNavigate,
} from "react-router-dom";
import sesion from "../Backend/Modelo/sesion";



function Inicio() {
  const [body, setbody]= useState({username:'', password:''})
  const [email, setEmail] = useState("");                                /* Se declaran los estados de las constantes */
  const [contraseña, setContraseña] = useState("");

  const Inicio_sesion= new sesion(email,contraseña)

  const handleChange=(e)=>{
    console.log(e.target.value)
    setbody({
      ...body,
      [e.target.name]:e.target.value
    })


  }
  const onSubmit=()=>{
    console.log(body)

  }

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
                <form onSubmit={Inicio_sesion.validar_inicio_sesion}> {/* Cuando se va a enviar el formulario se ejecuta la funcion flecha */}
                  <h1 class="h3 mb-3 fw-normal">Iniciar sesion</h1>
                  <div class="form-floating ">
                    <input
                      type="email"
                      class="form-control"
                      name="username"
                      id="email"
                      value={body.username}
                      onChange={handleChange}
                      /* value={email}
                      onChange={(ev) => setEmail(ev.target.value)}   */                   /* Se captura lo que hay en el imput */
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
                      id="contraseña"
                      value={body.password}
                      onChange={handleChange}
                      /* value={contraseña}
                      onChange={(ev) => setContraseña(ev.target.value)} */ /* Se captura lo que hay en el imput */
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
                      onClick={()=>onSubmit()}
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


export default Inicio;
