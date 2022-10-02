import Header from "../Componentes/Header";
import Inicio from "../Componentes/Inicio_sesion";
import React from "react";
import Registro from "../Componentes/Registro"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>

          <Route path="/Inicio_sesion" element={<Inicio/>}/>
          <Route path="/Registro"element={<Registro/>}/>
            
        </Routes>
      </div>
    </Router>
  );
}

export default App;
