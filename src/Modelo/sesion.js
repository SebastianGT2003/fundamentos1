class sesion{
    constructor(email,contraseña){  /* Lo que se necesita para iniciar sesion */

        this.email=email;
        this.contraseña=contraseña
    }

    iniciar_sesion (usuario) {
        if (usuario.email === "estudiante@gmail.com" && usuario.contraseña === "hola") 
            return(true)
        else 
            alert("Login incorrecto")
            return(false);
        
      }
    
}
export default sesion;