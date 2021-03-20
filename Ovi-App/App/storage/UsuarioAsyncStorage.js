import AsyncStorage from '@react-native-community/async-storage'

const USUARIO_KEY = '@usuario:key' //SE ALMACENA UN USUARIO


async function saveUsuario(usuario){ //funcion para almacenar el usuario
    try {
        await AsyncStorage.setItem(USUARIO_KEY, JSON.stringify(usuario))// stringify sirve para convertir los datos del usuario a un archivo JSON
        return JSON.stringify(usuario) //aca nos retorna el usuario en forma de JSON
    } catch (error) { //CAPTURAMOS POSIBLES ERRORES
        //Error
        console.log('error al guardar: ' +error.message)
        return 'Error de sintaxis'
    }
}

async function getUsuario(){ //funcion para obtener el usuario
    try {
        const item = await AsyncStorage.getItem(USUARIO_KEY)
        return JSON.parse(item) //parse se encarga de convertir el archivo JSON a un archivo JS 
    } catch (error) { //capturamos posibles errores
        // Error retrieving data
        console.log("Error al recuperar:" + error.message)
        return null
    }
}

async function deleteUsuario(){ //funcion para eliminar usuarios
    try {
        await AsyncStorage.removeItem(USUARIO_KEY)
        const item = await AsyncStorage.getItem(USUARIO_KEY)
        return (item == null?"usuario removido":"usuario no removido")
    } catch (error) { //capturamos posibles errores
        console.log("Error al eliminar" + error.message)
        return "Error de sintaxis"
    }
}

export {saveUsuario, getUsuario, deleteUsuario} //exportamos las funciones