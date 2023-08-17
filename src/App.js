import React, {useState} from "react";
import Bienvenida from "./componentes/Bienvenida";
import MostrarNumero from "./componentes/MostrarNumero";
import MostrarPalabra from "./componentes/MostrarPalabra";
import MostrarPalabraColores from "./componentes/MostrarPalabraColores";
import { Route, Routes } from "react-router-dom";

const App = () => {

  return (
    <div className="App">
      <Routes>
        <Route path="/Bienvenida" element={<Bienvenida/>}/>
        <Route path="/MostrarNumero" element={<MostrarNumero/>}/>
        <Route path="/MostrarPalabra" element={<MostrarPalabra/>}/>
        <Route path="/MostrarPalabraColores" element={<MostrarPalabraColores/>}/>
      </Routes>
    </div>
  );
}

export default App;
