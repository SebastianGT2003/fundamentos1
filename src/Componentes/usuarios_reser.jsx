import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios';


function Usuarios_reser(){

    const [userList, setUserList]= useState([]);

    /* const onDelete= async(correo) =>{
        try {
            const{data}= await axios.get('http://localhost:4000/eliminar_usuario', {correo:correo}) 
            console.log(data.message)
            getUsers()
        } catch (error) {
            console.log(error)
            
        }
        
    } */
    const getUsers= async() =>{
        const{data}= await axios.get('http://localhost:4000/usuarios') 
        console.log(data)
        setUserList(data)
    }

    useEffect(() => {
        
        // declare the data fetching function
        // call the function
        getUsers()
          // make sure to catch any error
          .catch(console.error);
      }, [])


    return (
        <div class= "container">
            <div class="row">
                <div class="col">
                    <table class="table table-striped">
                        <thead>
                        <tr>
                            <th>Documento</th>
                            <th>Nombre</th>
                            <th>Liga</th>
                            <th>Tipo_usuario</th>

                        </tr>

                        </thead>
                        <tbody>
                            {userList.map((user,index)=>(
                                <tr key={index}>
                                    <th>{user.documento}</th>
                                    <th>{user.nombre}</th>
                                    <th>{user.liga}</th>
                                    <th>{user.tipo_usuario}</th>
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


