import {StyleSheet} from 'react-native'
import colors from './colors'
import Colors from './colors'

const imageBackgroundStyle = StyleSheet.create({
    image:{
        flex:1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.WHITE

    }
})

export {imageBackgroundStyle}