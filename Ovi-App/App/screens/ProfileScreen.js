import React from 'react'
import {
    Text,
    View,
    TouchableOpacity,
    StatusBar,
    ScrollView
} from 'react-native'
import { mainStyles } from '@styles/styles'
import MyTextInput from '@components/MyTextInput'
import ToolBar from '@components/ToolBar'
import color from '@styles/colors'

//FUNCION PARA NAVEGAR ENTRE SCREENS
function goToScreen(props, routeName) {
    props.navigation.navigate(routeName)
}

export default function ProfileScreen (props) {
   
    return (
        //ESTRUCTURA DE LA PROFILESCREEN==============================================
        <View>
            
            <ToolBar titulo='Profile'
                onPressLeft={() => goToScreen(props, 'Principal')}
                iconLeft={require('@recursos/images/back.png')} />
            <Text style={{ textAlign: 'center', fontSize: 30, marginTop: 100 }}>Profile</Text>
        </View>
        //ESTRUCTURA DE LA PROFILESCREEN==============================================
    );
    
    }
 