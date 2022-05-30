import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";


export function BtnClientes(props){

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

export function BtnCalendario(props){

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
export function BtnRecordatorios(props){

    const { onPress, title }= props;
    return(
        <TouchableOpacity style={styles.button} onPress={ onPress }>
        <View style={styles.button3}>
            <Text style={styles.textoBoton} >
                { title }
            </Text>
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
        </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({

    button:{
        //alignItems: 'center',
        width: '35%',
        height: 100,
        justifyContent:'center',
        borderRadius: 30,
        overflow: 'hidden'
    },
    textoBoton:{
        color: '#fff',
        textAlign: 'center',
        //fontSize: 30
    },
    button1:{
        backgroundColor:'#8ecae6',
        flex: 1
    },
    button2:{
        backgroundColor:'#219ebc',
        flex:1
    },
    button3:{
        backgroundColor:'#457b9d',
        flex:1
    },
    button4:{
        backgroundColor:'#023047',
        flex:1
    },
})