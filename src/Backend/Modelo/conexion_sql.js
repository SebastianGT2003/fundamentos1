// Para ejecutar se pone la ruta desde modelo nodemon Conexion.js y se activa la conexion 
// En caso de que salga el error + CategoryInfo          : SecurityError: (:) [], PSSecurityException , + FullyQualifiedErrorId : UnauthorizedAccess
// Puede solucionanrse abriendo el power shell como administrador desde el inicio de windows, y ejecutando el comando  Set-ExecutionPolicy Unrestricted


const mysql = require('mysql2')

const conexion = mysql.createConnection({
/* host:'127.0.0.1',
database: 'gimnasio',
user:'root',
password:'' */
host:'b11hrk9buwkq5yhpiaad-mysql.services.clever-cloud.com',
database: 'b11hrk9buwkq5yhpiaad',
user:'utyagzo1xjpx9bmo',
password:'YK0MpPIanHnyoo1AZE0g',
port:'3306'
});

conexion.connect(function(error){
    if(error){
        throw error;
    
    } else{
        console.log('Conexion Exitosa');
    } 
});


// Ejemplo de consulta 

// exportamos como modulo la conexion para usarla en otros archivos
module.exports = conexion;


