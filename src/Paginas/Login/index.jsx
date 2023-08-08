import React from 'react'
import FormularioLogin from 'Componentes/FormularioLogin'
import styles from './Login.module.css'

export default function Login() {
  return (
    <main className={styles.login__conteudo}>
      <aside className={styles.lateral}>
        <h1>Login - <strong>Barber Sync</strong></h1>
      </aside>
      <section className={styles.login__form}>
        <FormularioLogin />
      </section>
    </main>
  )
}
