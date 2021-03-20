import React, {Component, useState, useContext} from 'react'
import {Text, 
      View, 
      TouchableOpacity,
      StatusBar,
      Image
} from 'react-native'
import {mainStyles, loginStyles} from '@styles/styles'
import MyTextInput from '@components/MyTextInput'
import MyButton from '@components/MyButton'
import color from '@styles/colors'
import { UsuarioContext } from '@context/UsuarioContext'
//import Snackbar from 'react-native-snackbar'

//FUNCION PARA NAVEGAR ENTRE PANTALLAS, RECIBE EL PROPS Y EL NOMBRE DE LA SCREEN A LA QUE NOS QUEREMOS MOVER
function goToScreen(props, routeName){
   props.navigation.navigate(routeName)
}

export default function LoginScreen(props){
   //hidePassword se encarga de ocultar las contraseñas cuando se clickea el icono del ojito
    const [login, loginAction] = useContext(UsuarioContext)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [hidePassword, sedHidePassword] = useState(false)
   
   

//ESTRUCTURA DE LA LOGINSCREEN=======================================
return(
   <View style={[mainStyles.container, {padding: 50}]}>
       <StatusBar backgroundColor={color.BLUE} translucent={true}/>
       <View style={loginStyles.logo}>
           <Image source={require('@recursos/images/Ovi.png')}
           style={{ height:250, width:250}}/>    
       </View>
       <MyTextInput keyboardType='email-address' placeholder='E-mail' image='user'
       value={email} onChangeText={(email)=> setEmail(email)}/>
       <MyTextInput keyboardType={null} placeholder='Contraseña' image='lock' bolGone={true}
       secureTextEntry={hidePassword}
       onPress={() => setHidePassword(!hidePassword)}
       value={password} onChangeText={(password)=> setPassword(password)}/>
       <MyButton
           titulo='Iniciar Sesión'
           onPress={()=> iniciarSesion()}
       />
       <MyButton
           transparent={true}
           titulo='Registrarse'
           onPress={()=> goToScreen('Registro')}
       />
       <View>
           <TouchableOpacity onPress={() => goToScreen(props, 'RecuperarPassword')}>
               <Text style={ [mainStyles.txtTransparent, { textDecorationLine: 'underline'}]}>Olvide mi Contraseña</Text>
           </TouchableOpacity>
       </View>
   </View>

    )
    function iniciarSesion(){
      loginAction({
          type:'sign', data:{
              email, password
          }
      })
      goToScreen('Principal')
  }

  function goToScreen(routeName){
      props.navigation.navigate(routeName)
  }
}
