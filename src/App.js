import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Paginas/Login";
import './Styles/EstilosGlobais.css'
import Inicio from "Paginas/Inicio";

import UsersContext from "Contexts/UsersContexts";
import CadastroUsuario from "Paginas/CadastroUsuario";
import { useState } from "react";
import Logado from "Contexts/Logado";


function App() {

  const [users, setUsers] = useState({});
  const [logado, setLogado] = useState(false);

  return (
    <UsersContext.Provider value={{ users, setUsers }}>
      <BrowserRouter>
        <Logado.Provider value={{ logado, setLogado }}>
          <Routes>
            <Route path="/">
              <Route index element={<Login />} />
            </Route>
            <Route path="/cadastro-usuario" element={<CadastroUsuario />} />
            <Route path="/inicio" element={<Inicio />} />
          </Routes>
        </Logado.Provider>
      </BrowserRouter>
    </UsersContext.Provider>

  );
}

export default App;