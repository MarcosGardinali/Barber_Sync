import React from 'react'
import styles from './Campos.module.css'

export default function Campos({children, type, placeholder}) {
    return (
        <label className={styles.campos}>
            {children}
            <input type={type} placeholder={placeholder} />
        </label>
    )
}
