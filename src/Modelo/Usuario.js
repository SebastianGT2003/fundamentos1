import {
    BrowserRouter as Router,
    Link,
    useNavigate,
  } from "react-router-dom";


class usuario{
    constructor(email,nombre,tipo_doc,num_doc, tipo_usu,liga,contraseña){/* Todo lo que necesita un usuario */

        this.email=email;
        this.nombre=nombre
        this.tipo_doc=tipo_doc
        this.num_doc=num_doc
        this.tipo_usu=tipo_usu
        this.contraseña=contraseña
        this.liga=liga
    }
    navegador= useNavigate();

    verificar = (contraseña, confir_contraseña) => {
        if (contraseña !== confir_contraseña)
          return (
              <div class="alert alert-danger " role="alert">
                Las contraseña no son iguales
              </div>
              
          );
        else
          return (false)
    }

/*     handleSubmit = (ev) => {
        ev.preventDefault();
        if this.registro_usuario(usuario):
            this.navegador("/Inicio_sesion")

        
        
        
        
    }
 */
/*     registro_usuario(usuario){

        if usuario.email in database:
            alert("El correo ya esta registrado")
            return false
        if usuario.num_doc in database:
            alert("El usuario ya existe en la base de datos")
            return false

        else:
            "Llamar a la base de datos y mandarle el usuario"
            this.navegador("/Inicio_sesion")


            


        
        

    } */
}
export default usuario;


/*         let email =document.getElementById('emailImput').value;
        let nombre = document.getElementById('nombreInput').value;
        let contraseña = document.getElementById('PasswordImput').value;
        let num_doc = document.getElementById('numero_documentoInput').value;
        let tipo_usu = document.getElementById('tipo_let').value;
        let liga = document.getElementById('liga').value;
        let tipo_doc = document.getElementById('tipo_documento').value;

        usuario=new usuario(email,nombre,contraseña,num_doc,tipo_usu,liga,tipo_doc)

        

        console.log(usuario); //Usuario */