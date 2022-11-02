import {
    BrowserRouter as Router,
    Link,
    useNavigate,
  } from "react-router-dom";


import axios from 'axios';


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

    get_usuario=(body)=>{
        return body
    }
    set_usuario=(body, datos)=>{
        body.nombre= datos.nombre
    }

    Registrar = (body) => {
        axios.post("http://localhost:4000/registroapi", body)
          .then(({ data }) => {
            console.log(data)
            alert("Registro correcto");
            this.navegador("/Inicio_sesion")
            
          })
          .catch(({ response }) => {
            console.log(response);
            alert("El correo ya esta registrado");
            
    
    
            
    
          })
        
        
}

    onDelete= async(correo) =>{
        try {
            const{data}= await axios.get('http://localhost:4000/eliminar_usuario', {correo:correo}) 
            console.log(data.message)
        } catch (error) {
            console.log(error)
            
        }
        
    }
    




}
export default usuario;


