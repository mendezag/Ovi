import React from 'react'
import AppNavigation from '@navigation/AppNavigation'
import { UsuarioProvider } from '@context/UsuarioContext'

function App(){
  return (
    //AppNavigation ESTA ENVUELTO POR UsuarioProvider PARA QUE CUANDO
    // EL CONTEXTO DE LA APP SE DESARROLLE DENTRO DE UNA SESION INICIADA, PODAMOS
    // SABER QUE USUARIO ESTA EN ESA SESION
    <UsuarioProvider>
      <AppNavigation/>
    </UsuarioProvider>
  )
}

export default App