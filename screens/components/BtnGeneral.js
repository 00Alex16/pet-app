import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";


export function BtnGeneral(props){

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


const styles = StyleSheet.create({

    button:{
        alignSelf: 'center',
        width: '50%',
        justifyContent:'center',
        borderRadius: 30,
        overflow: 'hidden'
    },
    button1:{
        backgroundColor:'#00e3fd'
    },
    textoBoton:{
        color: '#fff',
        textAlign: 'center',
        fontSize: 30
    }
})