import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";



function Reservas_administrador() {
  const [userList, setUserList] = useState([]);

  const getUsers = async () => {
    const { data } = await axios.get("http://localhost:4000/reservas_administrador");
    console.log(data);
    setUserList(data);
  };


  const onDelete = async (correo) => {
    try {
      const { data } = await axios.post("http://localhost:4000/api/eliminar/reserva", {
        correo: correo,
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
      <h1>Reservas de todos los usuarios</h1>
      <div class="row-4 mt-4">
        <div class="col">
          <table class="table table-striped">
            <thead>
              <tr>
                <th>Hora</th>
                <th>Nombre</th>
                <th>Tipo_usuario</th>
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
      </div>
    </div>
  );
}

export default Reservas_administrador ;
