import { BrowserRouter, Routes, Route } from "react-router-dom";
import './Styles/EstilosGlobais.css'
import React from "react";
import Inicio from "Paginas/Inicio";
import { AuthProvider } from "Contexts/AuthProvider";
import ProtectedLayout from "Componentes/ProtectedLayout";


function App() {
  return (
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/home">
              <ProtectedLayout>
                <Inicio />
              </ProtectedLayout>
            </Route>
            
            <Route path="/login">
              
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
  );
}

export default App;