import axios from "axios";
class reserva {
  constructor(email, nombre, tipo_usu, hora) {
    /* Todo lo que necesita un usuario */

    this.email = email;
    this.nombre = nombre;
    this.tipo_usu = tipo_usu;
    this.hora = hora;
  }

  Registrar_reserva = (body) => {
    axios.post("http://localhost:4000/registro/reserva", body)
      .then(({ data }) => {
        console.log(data);
        alert("Reserva aceptada");
        /* this.navegador("/reservas") */
      })
      .catch(({ response }) => {
        console.log(response);
        alert("El correo ya esta registrado");
      });
  };
}

export default reserva;
