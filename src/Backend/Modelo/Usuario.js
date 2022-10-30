/* import {
    BrowserRouter as Router,
    Link,
    useNavigate,
  } from "react-router-dom"; */

/* const conexion = require('./conexion_sql'); */

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

/*     MostrarAllRegistros = function(){

        conexion.query('SELECT * from usuarios', function(error,resultados,fields){
            if(error)
            throw error;
        
            // Esto muestra cada resultado de la busqueda
            resultados.forEach(result => {
                console.log(result);
            });
        }) 
    }

    registrar_usuario = function (documento, nombre, tipo_documento, liga, tipo_usuario, correo, contraseña) {

        //Para insertar un valor tipo texto se debe envolver en '"+NombreVariableString +"'
        // Todas las colmnas deben ir con `` 
        const registar = "INSERT INTO usuarios (`documento`,`nombre`,`tipo_documento`,`liga`,`tipo_usuario`,`contraseña`) VALUES (" + documento + ",'" + nombre + "','" + tipo_documento + "','" + liga + "','" + tipo_usuario + "','" + correo + "','" + contraseña + "')";

        // Se recoje el error y los resultados 
        conexion.query(registar, function (error, resultados) {
            if (error)
                throw error;

            console.log('Insercion exitosa');
        });
    };

    eliminar_usuario = function (correo, documento) {

        const eliminar = "DELETE FROM `usuarios` WHERE correo='" + correo + "'";

        conexion.query(eliminar, function (error, resultados) {
            if (error)
                throw error;

            console.log('Eliminacion correcta');
        });

    };

    ModificarEvento = function (new_name, new_password, liga, correo) {

        const modificar= "UPDATE `usuarios` SET `nombre`='"+new_name+"',`liga`='"+liga+"',contraseña='"+new_password+"' WHERE= '" + correo + "'";


        conexion.query(modificar, function (error, resultados) {
            if (error)
                throw error;

            console.log('Eliminacion correcta');
        });
    }; */
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


/*         let email =document.getElementById('emailImput').value;
        let nombre = document.getElementById('nombreInput').value;
        let contraseña = document.getElementById('PasswordImput').value;
        let num_doc = document.getElementById('numero_documentoInput').value;
        let tipo_usu = document.getElementById('tipo_let').value;
        let liga = document.getElementById('liga').value;
        let tipo_doc = document.getElementById('tipo_documento').value;

        usuario=new usuario(email,nombre,contraseña,num_doc,tipo_usu,liga,tipo_doc)

        

        console.log(usuario); //Usuario */


    /* navegador= useNavigate();

    verificar = (contraseña, confir_contraseña) => {
        if (contraseña !== confir_contraseña)
          return (
              <div class="alert alert-danger " role="alert">
                Las contraseña no son iguales
              </div>
              
          );
        else
          return (false)
    } */    /* navegador= useNavigate();

    verificar = (contraseña, confir_contraseña) => {
        if (contraseña !== confir_contraseña)
          return (
              <div class="alert alert-danger " role="alert">
                Las contraseña no son iguales
              </div>
              
          );
        else
          return (false)
    } */


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