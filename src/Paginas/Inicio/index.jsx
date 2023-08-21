import UsersContext from 'Contexts/UsersContexts';
import React, { useContext } from 'react'

export default function Inicio() {

  const { user } = useContext(UsersContext);
  console.log({
    id: user.id,
    nome: user.nome,
    email: user.email,
    senha: user.senha
  })

  return (
    <header>
      <h1>Bem vindo(a) <strong>{user.nome}</strong></h1>
    </header>
  );
}
