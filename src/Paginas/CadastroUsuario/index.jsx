import Botao from 'Componentes/Botao';
import Campos from 'Componentes/Campos';
import UsersContext from 'Contexts/UsersContexts';
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
    


export default function CadastroUsuario() {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const navigate = useNavigate();

    const {setUser} = useContext(UsersContext)

    function botaoVoltar(){
        navigate('/')
    }

    function cadastrar(evento){
        evento.preventDefault();
        setUser({
            id: uuidv4(),
            nome,
            email,
            senha
        })
        navigate('/')
    }

  return (
        <form onSubmit={cadastrar}>
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
            <Botao>
              Cadastrar-se
            </Botao>
            <Botao onclick={botaoVoltar}>
              Voltar
            </Botao>
        </form>
    );
}
