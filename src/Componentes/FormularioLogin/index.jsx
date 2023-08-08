import React from 'react'
import styles from './FormularioLogin.module.css'
import Campos from 'Componentes/Campos'

export default function FormularioLogin() {
  return (
    <form className={styles.formulario}>
        <Campos
          type='text'
          placeholder='Insira o login'
        >
          Login:
        </Campos>
        <Campos
          type='password'
          placeholder='Insira a senha'
        >
          Senha:
        </Campos>
    </form>
  )
}
