import axios from "axios";
class reserva {
  constructor(email, nombre, tipo_usu, hora) {
    /* Todo lo que necesita un usuario */

    this.email = email;
    this.nombre = nombre;
    this.tipo_usu = tipo_usu;
    this.hora = hora;
  }

  Registrar_reserva = (body,correo,setUserList) => {
    axios.post("http://localhost:4000/registro/reserva", body)
      .then(({ data }) => {
        console.log(data);
        alert("Reserva aceptada");
        this.actualizar_reservas_usuarios(correo, setUserList)
        /* this.navegador("/reservas") */
      })
      .catch(({ response }) => {
        console.log(response);
        alert("El correo ya esta registrado");
      });
  };

  actualizar_reservas = async (setUserList) => {
    const { data } = await axios.get("http://localhost:4000/reservas_administrador");
    console.log(data);
    setUserList(data);
  };
  eliminar_reservas = async (correo,setUserList) => {
    try {
      const { data } = await axios.post("http://localhost:4000/api/eliminar/reserva", {
        correo: correo,
      });
      console.log(data.message);
      this.actualizar_reservas(setUserList);
      alert("Reserva elimainada con exito")
    } catch (error) {
      console.log(error);
    }
  };
  actualizar_reservas_usuarios = async (correo,setUserList) => {
    const { data } = await axios.post("http://localhost:4000/reservaactual", {
      correo: correo,
    });
    console.log(data);
    setUserList(data);
  };
  eliminar_reservas_usuarios = async (correo,correo1,setUserList) => {
    try {
      const { data } = await axios.post("http://localhost:4000/api/eliminar/reserva",{correo: correo,});
      console.log(data.message);
      this.actualizar_reservas_usuarios(correo1,setUserList);
      alert("Tu reserva a sido elimainada con exito")
    } catch (error) {
      console.log(error);
    }
  };
}

export default reserva;
