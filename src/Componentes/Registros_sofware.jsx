import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

import Admin from "../Backend/Modelo/admin";


function Usuarios_reser() {
  const [userList, setUserList] = useState([]);
  const [body, setBody] = useState({
    nombre: "",
    liga: "",
    tipo_usuario: "",
  });
  const admin= new Admin(body)


  const getUsers = async () => {
    const { data } = await axios.get("http://localhost:4000/usuarios");
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
      const { data } = await axios.post("http://localhost:4000/api/eliminar", {
        correo: correo,
      });
      console.log(data.message);
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };

  const OnEdit = async (correo) => {
    try {
      const { data } = await axios.post("http://localhost:4000/editar", {
        body, correo: correo,
      });
      console.log(data.message);
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {

    getUsers()
     
      .catch(console.error);
  }, []);

  return (
    <div class="container">
      <h1>Usuarios registrados en tu pagina:</h1>
      <div class="row-4 mt-4">
        <div class="col">
          <table class="table table-striped">
            <thead>
              <tr>
                <th>Documento</th>
                <th>Nombre</th>
                <th>Liga</th>
                <th>Tipo_usuario</th>
                <th>Correo</th>
              </tr>
            </thead>
            <tbody>
              {userList.map((user, index) => (
                <tr key={index}>
                  <th>{user.documento}</th>
                  <th>{user.nombre}</th>
                  <th>{user.liga}</th>
                  <th>{user.tipo_usuario}</th>
                  <th>{user.correo}</th>
                  <th>
                    <button
                      type="button"
                      class="btn btn-danger"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      onClick={()=>{
                        setBody(user.nombre, user.liga, user.tipo_usuario)
                        /* const a= user.nombre
                        setBody(a) */
                      
                      }}
                    >
                      Editar
                    </button>
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
                              Modal title
                            </h1>
                            <button
                              type="button"
                              class="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          <div class="modal-body">
                            <form>
                              <div class="mb-3">
                                <label
                                  for="recipient-name"
                                  class="col-form-label"
                                >
                                  Nombre:
                                </label>
                                <input
                                  type="text"
                                  class="form-control"
                                  id="nombre"
                                  name="nombre"
                                  value={body.nombre}
                                  onChange={inputChange}
                                />
                              </div>
                              <div class="mb-3">
                                <label
                                  for="recipient-name"
                                  class="col-form-label"
                                >
                                  Liga:
                                </label>
                                <input
                                  type="text"
                                  class="form-control"
                                  id="liga"
                                  name="liga"
                                  value={body.liga}
                                  onChange={inputChange}
                                />
                              </div>
                              <div class="mb-3">
                                <label
                                  for="recipient-name"
                                  class="col-form-label"
                                >
                                  Tipo_usuario:
                                </label>
                                <input
                                  type="text"
                                  class="form-control"
                                  id="tipo_usuario"
                                  name="tipo_usuario"
                                  value={body.tipo_usuario}
                                  onChange={inputChange}
                                />
                              </div>
                              <div class="mb-3">
                                <label
                                  for="recipient-name"
                                  class="col-form-label"
                                >
                                  correo:
                                </label>
                                <input
                                  type="text"
                                  class="form-control"
                                  id="correo"
                                  name="correo"
                                  value={user.correo}
                                  onChange={inputChange}
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
                              Close
                            </button>
                            <button
                              type="button"
                              class="btn btn-primary"
                              onClick={() => OnEdit(user.correo)}
                            >
                              Save changes
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </th>
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
      </div>
    </div>
  );
}

export default Usuarios_reser;
