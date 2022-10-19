import Inicio_sesion from "./Paginas/Login"
import React from "react";
import Registro from "./Paginas/Registro"
import Cerrar from "./Paginas/cerrar_sesios"
import Principal from "./Paginas/Principal"
import Inicio_sesion_admin from "./Paginas/login_admin"





import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";



function App() {
  return (
    
    

    
    <Router>
        <Routes>

          <Route path="/Inicio_sesion_admin" element={<Inicio_sesion_admin/>}/>
          <Route path="/Inicio_sesion" element={<Inicio_sesion/>}/>
          <Route path="/Registro"element={<Registro/>}/>
          <Route path="/sesion_iniciada"element={<Cerrar/>}/>
          <Route path="/"element={<Principal/>}/>

            
        </Routes>
    </Router>
    
  );
}

export default App;
