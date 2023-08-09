import React, { useEffect } from 'react'
import FormularioLogin from 'Componentes/FormularioLogin'
import styles from './Login.module.css'
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const logado = localStorage.getItem('logado') === 'true';
  
  useEffect(() => {
    if (logado) {
      navigate('/Inicio');
    }
  }, [logado, navigate]);

  if (logado) {
    return null; // Evita a renderização da página de login se já estiver logado
  }
  return (
    <main className={styles.login__conteudo}>
      <aside className={styles.lateral}>
        <h1>Login - <strong>Barber Sync</strong></h1>
      </aside>
      <section className={styles.login__form}>
        {!logado && <FormularioLogin />}
      </section>
    </main>
  )
}
