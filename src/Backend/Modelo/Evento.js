//importamos la conexion
const conexion = require('./Conexion')

// Clase Evento 
// Nota: En javascript no existen propiamente clases 
// Se define una funcion, y dentro de ella los metodos de la clase

function Evento(id_socio="",nombre="",numeroDePersonas="",Alimentacion="",Salon="",Fecha="",Montaje=""){
    //constructor
    this.cedula = id_socio;
    this.nombre = nombre;
    this.numeroDePersonas= numeroDePersonas;
    this.alimentacion = Alimentacion;
    this.salon = Salon;
    this.fecha = Fecha;
    this.montaje = Montaje
    
    // Muestra todos los registros
    this.MostrarAllRegistros = function(){

        conexion.query('SELECT * from evento', function(error,resultados,fields){
            if(error)
            throw error;
        
            // Esto muestra cada resultado de la busqueda
            resultados.forEach(result => {
                console.log(result);
            });
        }) 
    }
    //Fin de la funcion

    // Crea nuevos eventos La fecha es un str 
    this.Crear_Evento = function(id_evento,id_socio,nombre,numeroDePersonas,Salon,Montaje,Fecha){

        //Para insertar un valor tipo texto se debe envolver en '"+NombreVariableString +"'
        // Todas las colmnas deben ir con `` 
        const insertar = "INSERT INTO evento (`Id_Evento`,`Id_socio`,`Nombre`,`#Personas`,`Salon`,`Montaje`,`Fecha`) VALUES ("+id_evento+","+id_socio+",'"+nombre+"',"+numeroDePersonas+","+Salon+","+Montaje+",'"+Fecha+"')";

        // Se recoje el error y los resultados 
        conexion.query(insertar, function(error,resultados){ 
        if(error)
        throw error;

        console.log('Insercion exitosa'); 
        })
            }

    this.CancelarEvento = function(Id_evento,Id_socio){

    const Eleminar = "DELETE FROM `evento` WHERE Id_Evento="+Id_evento+" and Id_socio="+Id_socio+"";

    conexion.query(Eleminar, function(error,resultados){ 
        if(error)
        throw error;

        console.log('Eliminacion correcta'); 
        })
        
    }

    this.ModificarEvento = function(Id_evento,Id_socio){

        const Eleminar = "DELETE FROM `evento` WHERE Id_Evento="+Id_evento+" and Id_socio="+Id_socio+"";
    
        conexion.query(Eleminar, function(error,resultados){ 
            if(error)
            throw error;
    
            console.log('Eliminacion correcta'); 
            }) 
        }
    
}

// Se instancia el objeto
// Para ejecutar por consola este script 
// Fundamentos\src\Modelo> nodemon Evento.js


const miprimerevento = new Evento();
//SeMuestranTodosLosRegistros
miprimerevento.MostrarAllRegistros();
//Crear evento
//miprimerevento.Crear_Evento(123,23,"Felipe",37,2,4,"2022-10-11",8);
//Cancelar evento 
//miprimerevento.CancelarEvento(123,23);








