import Header from "../Componentes/Header";
import Reservas_adm from "../Componentes/reservas_administrador"

function Reservas_administrador() {
    return (
      <div className="index">
        <Header />
         <Reservas_adm/>
      </div>
    );
  }
  
  export default Reservas_administrador;