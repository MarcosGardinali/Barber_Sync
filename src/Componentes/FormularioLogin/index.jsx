import React from 'react'
// import styles from './FormularioLogin.module.css'

export default function FormularioLogin() {
  return (
    <form>
        <label>
            Login:
            <input type='text' />
        </label>
        <label>
            Senha:
            <input type='password'/>
        </label>
    </form>
  )
}
