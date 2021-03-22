import React, { useState } from 'react'
import {
    Text,
    View,
    TouchableOpacity,
    StatusBar,
    ScrollView
} from 'react-native'
import { mainStyles, registroStyles } from '@styles/styles'
import MyTextInput from '@components/MyTextInput'
import ToolBar from '@components/ToolBar'
import color from '@styles/colors'
import { CheckBox, SocialIcon, Button } from 'react-native-elements'

//FUNCION PARA NAVEGAR ENTRE PANTALLAS
function goToScreen(props, routeName) {
    props.navigation.navigate(routeName)
}

export default function RegistroScreen(props) {

    const [hidePassword, setHidePassword] = useState(false)
//hidePassword SE ENCARGA DE OCULTAR EL PASSWORD CUANDO SE CLICKEA EN EL ICONO DEL OJITO
    return (
        //ESTRUCTURA DE LA SCREEN====================================================
        <ScrollView
            keyboardDismissMode='on-drag'
            keyboardShouldPersistTaps='always'
            style={{ backgroundColor: color.WHITE }}>
            <StatusBar backgroundColor={color.BLUE} translucent={true} />
            <ToolBar titulo='Registrarse'
                onPressLeft={() => goToScreen(props, 'Login')}
                iconLeft={require('@recursos/images/back.png')} />
            <View style={[mainStyles.container, { padding: 50 }]}>
                <Text style={mainStyles.titleText}> Crea tu Cuenta</Text>
                <MyTextInput placeholder='Nombres' image='user' />
                <MyTextInput placeholder='Apellidos' image='user' />
                <MyTextInput keyboardType='email-address' placeholder='E-mail'
                    image='envelope' />
                <MyTextInput keyboardType={null} placeholder='Contraseña'
                    onPress={() => setHidePassword(!hidePassword)}
                    keyboardType={null}
                    image='lock' bolGone={true}
                    secureTextEntry={hidePassword}
                />
                <CheckBox
                    containerStyle={registroStyles.checkBox}
                    textStyle={{ color: color.BLUE }}
                    title='He leído y acepto los términos y condiciones'
                    checked={false}
                    checkedColor={color.BLUE}
                />
                <View style={mainStyles.btnMain}>
                    <TouchableOpacity onPress={() =>
                        goToScreen(props, 'Login')}>
                        <Text style={mainStyles.btntxt}>Registrarse</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
        </ScrollView>
    )
}//ESTRUCTURA DE LA SCREEN====================================================