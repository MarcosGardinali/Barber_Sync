import React from 'react'
import styles from './Campos.module.css'

export default function Campos({children, type, placeholder, valor, aoAlterado}) {

    function aoDigitado(evento){
        aoAlterado(evento.target.value)
    }

    return (
        <label className={styles.campos}>
            {children}
            <input 
                type={type} 
                placeholder={placeholder} 
                required  
                value={valor}
                onChange={aoDigitado}    
            />
        </label>
    )
}
