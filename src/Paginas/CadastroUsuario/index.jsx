import Botao from 'Componentes/Botao';
import Campos from 'Componentes/Campos';
import UsersContext from 'Contexts/UsersContexts';
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styles from './CadastroUsuario.module.css'
import { cadastrarUsuario } from './CadastroHelpers';
    


export default function CadastroUsuario() {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const navigate = useNavigate();

    const {setUsers} = useContext(UsersContext)

    function botaoVoltar(){
        navigate('/')
    }

    function cadastrar(evento) {
        evento.preventDefault();
        const novoUsuario = cadastrarUsuario(nome, email, senha);
        setUsers(novoUsuario);
        navigate('/');
    }

  return (
        <form onSubmit={cadastrar} className={styles.pagina__cadastro}>
            <h1 className={styles.titulo}>SignUp - <strong>Barber Sync</strong></h1>
            <main className={styles.formulario}>
            <Campos
                type='text '
                placeholder='Insira o seu nome'
                valor={nome}
                aoAlterado={valor => setNome(valor)}
            >
                Nome:
            </Campos>
            <Campos
                type='email '
                placeholder='Insira o login'
                valor={email}
                aoAlterado={valor => setEmail(valor)}
            >
                Login:
            </Campos>
            <Campos
                type='password '
                placeholder='Insira o a senha'
                valor={senha}
                aoAlterado={valor => setSenha(valor)}
            >
                Senha:
            </Campos>
            <section>
            <Botao>
              Cadastrar-se
            </Botao>
            <Botao onclick={botaoVoltar}>
              Voltar
            </Botao>
            </section>
            </main>
        </form>
    );
}
