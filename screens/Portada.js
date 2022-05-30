import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { BotonCrearCuenta, BotonIniciarSesion } from './components/BotonesPortada';
import { LinearGradient } from 'expo-linear-gradient';

const Portada = (props) => {
  return (
    <View style={styles.fondo}>
      <LinearGradient
        // Background Linear Gradient
        colors={['rgba(0,184,255,0.8)', 'transparent']}
        style={{position:'absolute',height: '50%',left: 0,
        right: 0,
        top: 0,}}
      />
        <Text style={styles.textoName}>
          Petapp
        </Text>
        <Text style={styles.texto} >
          Petapp la mejor app de gestion veterinaria
        </Text>
        <Text style={styles.texto}>
          toda tu informacion al alcance de tus manos, de manera facil y rapida
        </Text>
        <BotonIniciarSesion style={styles.botones} title='Iniciar sesión' onPress={() => props.navigation.navigate('IniciarSesion')}></BotonIniciarSesion>
        <BotonCrearCuenta title='Crear cuenta' onPress={() => props.navigation.navigate('CrearCuenta')}></BotonCrearCuenta>
    </View>
  )
}

const styles = StyleSheet.create({
  fondo: {
    //backgroundColor: '#8CFF72',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    alignContent: 'center'
  },
  botones:{
    bottom:0
  },
  texto:{
    alignSelf: 'center',
    fontFamily: 'sans-serif',
    justifyContent: 'center',
    width: '70%',
    textAlign: 'center'
  },
  textoName:{
    alignSelf:'center',
    textAlign: 'center',
    justifyContent: 'center',
    fontWeight:'bold',
    width: '70%',
    height: '5%',
    fontSize: 40,
    marginBottom: 20
  }
});

export default Portada;