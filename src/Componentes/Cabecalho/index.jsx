import React from 'react'
import styles from './Cabecalho.module.css'
import CabecalhoNavegacao from 'Componentes/CabecalhoNavegacao'
import { Link, useNavigate } from 'react-router-dom'

export default function Cabecalho() {

  const navigate = useNavigate();

    function fazerLogout() {
        localStorage.setItem('logado', 'false'); // Define o usuário como não logado
        navigate('/'); // Redireciona para a página de login
    }

  return (
    <header className={styles.cabecalho}>
        <h1><Link className={styles.cabecalho__titulo} to={'/inicio'}>Barber Sync</Link></h1>
        <nav className={styles.cabecalho__link}>
            <CabecalhoNavegacao
                to={'/agendar'}
            >
                Realizar agendamento
            </CabecalhoNavegacao>
            <CabecalhoNavegacao
              to={'/'}
              fazerLogout={fazerLogout}
            >
              Sair
            </CabecalhoNavegacao>
        </nav>
    </header>
  )
}
