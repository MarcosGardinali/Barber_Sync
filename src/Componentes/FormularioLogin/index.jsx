import React, { useState } from 'react';
import styles from './FormularioLogin.module.css';
import Campos from 'Componentes/Campos';
import Botao from 'Componentes/Botao';
import { useNavigate } from 'react-router-dom';

export default function FormularioLogin() {

  const navigate = useNavigate();


  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const [logado, setLogado] = useState(false);

  function aoLogar(evento) {
    evento.preventDefault();
    if (login === "Marcos" && senha === "123") {
      setLogado(true);
      localStorage.setItem('logado', 'true'); // Salva o estado de logado no localStorage
      navigate('/Inicio'); // Redirecionamento para a página de início
    }
  }
  return (
    <div className={styles.container}>
      <form className={styles.formulario} onSubmit={aoLogar}>
        <Campos
          type='text'
          placeholder='Insira o login'
          valor={login}
          aoAlterado={valor => setLogin(valor)}
        >
          Login:
        </Campos>
        <Campos
          type='password'
          placeholder='Insira a senha'
          valor={senha}
          aoAlterado={valor => setSenha(valor)}
        >
          Senha:
        </Campos>
        <section className={styles.botoesContainer}>
          <div className={styles.loginButton}>
            <Botao type="submit">
              Login
            </Botao>
          </div>
          <div className={styles.cadastrarButton}>
            <Botao type="button" onclick="">
              Cadastrar-se
            </Botao>
          </div>
        </section>
      </form>
    </div>
  );
}


