import 'react-native-gesture-handler'
import React  from 'react'
import AppNavigation from '@navigation/AppNavigation'
//import Inputs from '@input'

function App(){
    return <AppNavigation/>
}

/*import {Text, View, Image, Button, Alert, StyleSheet, ImagePropTypes} from 'react-native';
import image from "./assets/Ovi.png";

const App = () => {
    return (
        <View style = {{flex: 1, justifyContent: "center", alignItems:"center", backgroundColor: '#B0C4DE'}}>
        
            <Text style= {{fontSize: 50, color: 'black'}}> Ovi </Text> 

        <Image
            source = {image}
            //source = {{uri: 'https://picsum.photos/200/200'}}
            style = {{height:180, width: 180, borderRadius: 100}}
        />

        <Button
            onPress = {()=> Alert.alert ('Pero ponele voluntaa!!!')}
            title='Iniciar Test'
            color="black"
            style = {{height:100, width: 120, marginTop: 20,}}
            />

        </View> 


    );
       
};*/

export default App