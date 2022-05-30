import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";


export function BtnClientes(props){

    const { onPress, title }= props;
    return(
        <TouchableOpacity style={styles.button} onPress={ onPress }>
        <View style={styles.button1}>
            <Text style={styles.textoBoton} >
                { title }
            </Text>
            <Image
                style={{width:100 , height:100, alignSelf:'center'}}
                source={require('../img/clientes.png')} />
        </View>
        </TouchableOpacity>
    );
}

export function BtnCalendario(props){

    const { onPress, title }= props;
    return(
        <TouchableOpacity style={styles.button} onPress={ onPress }>
        <View style={styles.button2}>
            <Text style={styles.textoBoton} >
                { title }
            </Text>
            <Image
                style={{width:100 , height:100,alignSelf:'center'}}
                source={require('../img/calendario.png')} 
            />
        </View>
        </TouchableOpacity>
    );
}
export function BtnRecordatorios(props){

    const { onPress, title }= props;
    return(
        <TouchableOpacity style={styles.button} onPress={ onPress }>
        <View style={styles.button3}>
            <Text style={styles.textoBoton} >
                { title }
            </Text>
            <Image
                style={{width:100 , height:100,alignSelf:'center'}}
                source={require('../img/notificaciones.png')} />
        </View>
        </TouchableOpacity>
    );
}
export function BtnReferencias(props){

    const { onPress, title }= props;
    return(
        <TouchableOpacity style={styles.button} onPress={ onPress }>
        <View style={styles.button4}>
            <Text style={styles.textoBoton} >
                { title }
            </Text>
            <Image
                style={{width:100 , height:100,alignSelf:'center'}}
                source={require('../img/referencias.png')} />
        </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({

    button:{
        width: 150,
        height: 150,
        justifyContent:'center',
        borderRadius: 30,
        overflow: 'hidden'
    },
    textoBoton:{
        color: '#fff',
        textAlign: 'center',
        alignSelf: 'center',
        fontSize: 20
    },
    button1:{
        backgroundColor: '#03CECE',//'#8ecae6',
        flex: 1
    },
    button2:{
        backgroundColor:'#03CECE',//'#219ebc'
        flex:1,
    },
    button3:{
        backgroundColor:'#03CECE', //'#457b9d',
        flex:1
    },
    button4:{
        backgroundColor: '#03CECE', //'#023047',
        flex:1
    },
})