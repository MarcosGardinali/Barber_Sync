import { UseAuth } from 'Contexts/AuthProvider/useAuth'
import Login from 'Paginas/Login'
import React from 'react'

export default function ProtectedLayout({children}: {children: JSX.Element} ) {
  const auth = UseAuth()

  if (!auth.email){
    return <Login/>
  }

  return children
}
