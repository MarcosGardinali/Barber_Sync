import { BrowserRouter, Route, Routes, Navigate  } from "react-router-dom";
import Login from "./Paginas/Login";
import './Styles/EstilosGlobais.css'
import Inicio from "Paginas/Inicio";
import { useEffect, useState } from "react";
import RealizarAgendamento from "Paginas/RealizarAgendamento";

function AppRoutes() {
  const [logado, setLogado] = useState(
    localStorage.getItem("logado") === "true"
  );

  useEffect(() => {
    localStorage.setItem("logado", logado);
  }, [logado]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={logado ? <Inicio /> : <Login />}
        />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/agendar" element={<RealizarAgendamento />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
