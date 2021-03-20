import React, { useContext, useEffect } from 'react'
import { View, StatusBar } from 'react-native'
import * as Animatable from 'react-native-animatable'
import { splashStyles } from '@styles/styles'
import { getUsuario } from '@storage/UsuarioAsyncStorage'
import { UsuarioContext } from '@context/UsuarioContext'

export default function SplashScreen(props) {

    const [login, loginAction] = useContext(UsuarioContext)

    useEffect(() =>{
        fetchSesion(loginAction)
    }, [])
//estructura y configuracion de la splashScreen y del splash==================
    return (
        <View style={splashStyles.image}>
            <StatusBar translucent backgroundColor='rgba(0,0,0,0.2)' />
            <Animatable.Image
                animation="pulse"
                easing="ease-out"
                iterationCount="infinite"
                style={{
                    width: 200,
                    height: 200,
                    margin: 100,
                }}
                source={require('@recursos/images/Ovi.png')}
            />
        </View>
    )//estructura y configuracion de la splashScreen y del splash==================
    
//esta funcion comprueba si existe una sesion iniciada
    async function fetchSesion(loginAction){

        const response = await getUsuario() //response almacena una un usuario en sesion en caso de haber uno

        console.log(response)

        if(response == null){ //si response no contiene ninguna sesion la app nos dirige a la pantalla de login
            setTimeout(() =>{
                goToScreen('Login')
            }, 3000)
            return
        }

        loginAction({ type: 'sing-in', data: response})
        setTimeout(() =>{
            goToScreen('Principal') //en caso de haber una sesion almacenada nos redirige a la screen principal
        }, 500)
    }
//funcion para navegar entre pantallas
    function goToScreen(routeName){
        props.navigation.replace(routeName)
    }
}