import {
    BrowserRouter as Router,
    Link,
    useNavigate,
  } from "react-router-dom";
import axios from "axios";

class sesion{
    constructor(email,contraseña){  /* Lo que se necesita para iniciar sesion */

        this.email=email;
        this.contraseña=contraseña
        
    }
    navegador= useNavigate();

    


    iniciar_sesion = (body) => {
      axios.post("http://localhost:4000/login", body)
        .then(({ data }) => {
          console.log(data)
          localStorage.setItem('auth', 'yes')
          
          alert("Login correcto");
          this.navegador("/sesion_iniciada")
          
        })
        .catch(({ response }) => {
          console.log(response.data);
          alert("Login incorrecto");


          

        });
      
    };
    cerrar_sesion=()=>{
      return this.navegador("/Inicio_sesion")
      

    }
    

    
}
export default sesion;