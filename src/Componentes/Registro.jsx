import React from "react";
import "../Estilos/Registro.css";

function Registro() {
  return (
    <div className="contenedor_registro">
      <div className="hola">
        <div className="botonderechareg">
          <button type="button" className="adminreg">
            Regresar
          </button>
        </div>
        <div className="centerform_reg">
          <div className="backgroudform_reg">
            <form class="row g-3 needs-validation">
              <div class="col-12 fw-bold">
                <label for="nombreInput" class="form-label ">
                  Nombre completo
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="nombreInput"
                  placeholder="Ingrese su nombre"
                  required
                />
              </div>
              <div class="col-6 mt-4 ">
                <select
                  class="form-select"
                  id="tipo_documento"
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
                  type="text"
                  class="form-control"
                  id="numero_documentoInput"
                  placeholder="Ingrese su numero de documento"
                  required
                />
              </div>
              <div class="col-6 mt-4 ">
                <select
                  id="tipo_usuario"
                  class="form-select"
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
                <select id="liga" class="form-select " aria-label="liga" required>
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
                  placeholder="Password"
                  required
                />
              </div>
              <div class="mt-3">
                <button class="w-100 btn btn-lg btn-danger mt-3" type="submit">
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

export default Registro;
