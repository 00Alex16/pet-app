import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";


export function BotonIniciarSesion(props){

    const { onPress, title }= props;
    return(
        <TouchableOpacity style={styles.button} onPress={ onPress }>
        <View style={styles.button1}>
            <Text style={styles.textoBoton} >
                { title }
            </Text>
        </View>
        </TouchableOpacity>
    );
}

export function BotonCrearCuenta(props){

    const { onPress, title }= props;
    return(
        <TouchableOpacity style={styles.button} onPress={ onPress }>
            <View style={styles.button2}>
                <Text style={styles.textoBoton} >
                    { title }
                </Text>
            </View>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({

    button:{
        paddin: 20,
        alignSelf: 'center',
        width: '70%',
        justifyContent:'center',
        marginBottom:20,
        position: 'relative',
        top:150,
        borderRadius: 30,
        overflow: 'hidden'
    },
    button1:{
        backgroundColor:'#00e3fd'
    },
    button2:{
        backgroundColor: '#ff930f',
    },
    textoBoton:{
        color: '#fff',
        textAlign: 'center',
        fontSize: 25
    }
})