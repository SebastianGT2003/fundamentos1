import {
    BrowserRouter as Router,
    Link,
    useNavigate,
  } from "react-router-dom";


class sesion_admin{
    constructor(email,contraseña){  /* Lo que se necesita para iniciar sesion */

        this.email=email;
        this.contraseña=contraseña
        
    }
    navegador= useNavigate();

    

    iniciar_sesion (email, contraseña) {
        if (email === "estudiante@gmail.com" && contraseña === "hola") 
            return(true)
        else 
            alert("Login incorrecto")
            return(false);
        
      }

    validar_inicio_sesion=(ev)=> { /* funcion que se ejecuta cuando se da al boton de inicio sesion */
      ev.preventDefault();
      var validate= this.iniciar_sesion(this.email, this.contraseña); /* se ejecuta funcion login si retorna true se redirecciona a sesion iniciada */
      if (validate){
        this.navegador("/sesion_iniciada") /* redirecciona a sesion iniciada */
      }
    }
    
}
export default sesion_admin;