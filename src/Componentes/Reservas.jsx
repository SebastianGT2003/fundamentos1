import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import reserva from "../Backend/Modelo/Reserva";

function Reserva() {
  const [body, setBody] = useState({nombre: "",correo: "",tipo_usuario: "",hora: "",});
  const [userList, setUserList] = useState([]);
  const Reserva = new reserva(body);

  const getReservas = async (correo) => {
    const { data } = await axios.post("http://localhost:4000/reservaactual", {
      correo: correo,
    });
    console.log(data);
    setUserList(data);
  };
  
  const inputChange = ({ target }) => {
    const { name, value } = target;
    setBody({
      ...body,
      [name]: value,
    });
  };
  const onDelete = async (correo) => {
    try {
      const { data } = await axios.post("http://localhost:4000/api/eliminar/reserva",{correo: correo,});
      console.log(data.message);
      getReservas(body.correo);
    } catch (error) {
      console.log(error);
    }
  };



  return (
    <div class="container">
      <h1>Aqui puede hacer sus reservas</h1>
      <button
        type="button"
        class="btn btn-danger"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Reservar
      </button>
      <h3>Tus reservas:</h3>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Reserva
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body needs-validation">
              <form
                class="row g-3 needs-validation" /* onSubmit={handleSubmit} */
              >
                <div class="mb-3">
                  <label for="recipient-name" class="col-form-label">
                    Nombre:
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="nombre"
                    name="nombre"
                    required
                    value={body.nombre}
                    onChange={inputChange}
                  />
                </div>

                <div class="mb-3">
                  <select
                    id="tipo_usuario"
                    class="form-select"
                    name="tipo_usuario"
                    value={body.tipo_usuario}
                    onChange={inputChange}
                    aria-label="Tipo de usuario"
                    required
                  >
                    <option selected disabled value="">
                      Tipo de usuario
                    </option>
                    <option value="estudiante">Estudiante</option>
                    <option value="profesor">Profesor</option>
                    <option value="egresado">Egresado</option>
                    <option value="empleado">Empleado</option>
                  </select>
                </div>
                <div class="mb-3">
                  <select
                    class="form-select"
                    id="hora"
                    name="hora"
                    value={body.hora}
                    onChange={inputChange}
                    required
                    aria-label="Tipo de documento"
                  >
                    <option selected disabled value="">
                      Hora
                    </option>
                    <option value="8-10">8-10</option>
                    <option value="10-12">10-12</option>
                    <option value="12-14">12-14</option>
                    <option value="14-16">14-16</option>
                    <option value="16-18">16-18</option>
                    <option value="18-120">18-20</option>
                  </select>
                </div>
                <div class="mb-3">
                  <label for="recipient-name" class="col-form-label">
                    Correo:
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="correo"
                    name="correo"
                    value={body.correo}
                    onChange={inputChange}
                    required
                  />
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>
              <button
                type="submit"
                class="btn btn-danger"
                onClick={() => {
                  Reserva.Registrar_reserva(body)
                  getReservas(body.correo)
                }}
              >
                Reservar
              </button>
            </div>
          </div>
        </div>
      </div>
      <table class="table">
        <thead>
          <tr>
            <th>Hora</th>
            <th>Nombre</th>
            <th>Tipo Usuario</th>
            <th>Correo</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((user, index) => (
            <tr key={index}>
              <th>{user.hora}</th>
              <th>{user.nombre}</th>
              <th>{user.tipo_usuario}</th>
              <th>{user.correo}</th>
              <th>
                <button
                  type="button"
                  className="btn btn-dark btn-sm"
                  onClick={() => onDelete(user.correo)}
                >
                  <i class="bi bi-trash-fill"></i>
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Reserva;
