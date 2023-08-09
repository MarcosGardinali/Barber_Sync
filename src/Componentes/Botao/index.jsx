import React from 'react'
import './Botao.css'

export default function Botao({children, type, onclick}) {
  return (
    <button className='botao' type={type} onClick={onclick}>
        {children}
    </button>
  )
}
