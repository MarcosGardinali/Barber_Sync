import React from 'react'
import styles from './CabecalhoNavegacao.module.css'
import { Link } from 'react-router-dom'

export default function CabecalhoNavegacao({ children, to, fazerLogout }) {
  return (
    <Link
      className={styles.links}
      to={to}
      onClick={fazerLogout}
    >
      {children}
    </Link>
  )
}
