import styles from './FormularioLogin.module.css';
import Campos from 'Componentes/Campos';
import Botao from 'Componentes/Botao';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UsersContext from 'Contexts/UsersContexts';


export default function FormularioLogin() {

  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');

  const { user } = useContext(UsersContext);


  const navigate = useNavigate(); 

  function botaoCadastrar(){
    navigate('/cadastro-usuario')
  }

  function handleSubmit(evento){
    evento.preventDefault();
    if(login === user.email && senha === user.senha){
      navigate('/inicio');
    }
    else{
      alert("Login ou senha incorretos!!")
    }
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
            <Botao type="button" onclick={botaoCadastrar}>
              Cadastrar-se
            </Botao>
          </div>
        </section>
      </form>
    </div>
  );
}