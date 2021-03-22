import React, { createContext, useReducer } from 'react'
import { saveUsuario, deleteUsuario } from '@storage/UsuarioAsyncStorage'
//import Snackbar from 'react-native-snackbar'

const initialState = {
    usuario: {
        nombre: '',
        apellido: '', //esstado inicial del context
        email: '',
        password: ''
    },
    activo: false
}
// usuarioReducer recibe por parametro dos estados initialState y payload
const usuarioReducer = (state = initialState, payload) => { //payload se encarga de almacenar la info de cada una de las acciones que se declaran abajo

    switch (payload.type) { // hay 3 tipos de payloads posibles (sing-in, sing y sing-out)

        case 'sing-in':
            console.log('Bienvenidos al sistema') 
            return { ...state, usuario: payload.data, activo: true } //caso con el inicio de sesion ya efectuado
        case 'sign':
            saveUsuario(payload.data).then((msg) => {
                console.log('usuario guardado') //caso donde se crea y guarda una sesion
            })
            /*Snackbar.show({
                title: 'Inicio de sesión exitoso',
                duration: Snackbar.LENGTH_LONG,
            })*/

            return { ...state, usuario: payload.data, activo: true }
        case 'sign-out':
            deleteUsuario().then((msg) => { //caso donde se cierra la sesion
                console.log(msg)
            })
            /*Snackbar.show({
                title: 'Sesión expirada',
                duration: Snackbar.LENGTH_LONG,
            })*/

            return { ...state, usuario: payload.data, activo: false }
        default:
            return state
    }
}

const UsuarioContext = createContext(initialState) //CON ESTO CREAMOS UN CONTEXTO INICIAL (EL CONTEXTO BASICAMENTE ES EL ESTADO DE LA SESON, SI ESTA ACTIVA O NO)

function UsuarioProvider(props){ //UsuarioProvider NOS PROVEE DEL USUARIO EN SESION

    const [login, loginAction] = useReducer(usuarioReducer, initialState)

    return(
        <UsuarioContext.Provider value={[login, loginAction]}>
            {props.children}
        </UsuarioContext.Provider>
    )
}

export { UsuarioContext, UsuarioProvider}