import styles from './FormularioLogin.module.css';
import Campos from 'Componentes/Campos';
import Botao from 'Componentes/Botao';
import { useState } from 'react';

export default function FormularioLogin() {

  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');

  function handleSubmit(evento){
    evento.preventDefault();
    console.log('submit', { login, senha });

    setLogin('')
    setSenha('')
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.formulario}>
        <Campos
          type='email '
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
            <Botao type="button" onclick={() => console.log("Cadastrar foi clicado")}>
              Cadastrar-se
            </Botao>
          </div>
        </section>
      </form>
    </div>
  );
}