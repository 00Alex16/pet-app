import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { BotonCrearCuenta, BotonIniciarSesion } from './components/BotonesPortada';
import { LinearGradient } from 'expo-linear-gradient';

const Portada = (props) => {
  return (
    <View style={styles.fondo}>
      <LinearGradient
        // Background Linear Gradient
        colors={['rgba(0,0,0,0.8)', 'transparent']}
        style={{position:'absolute',height: 300,left: 0,
        right: 0,
        top: 0,}}
      />
        <Text style={styles.textoName}>
          Petapp
        </Text>
        <Text style={styles.texto} >
          Petapp la mejor app de gestion veterinaria.
          toda la informacion que necesitas al alcance de tu mano.
          una app facil de usar, perfecta para ti
        </Text>
        <BotonIniciarSesion style={styles.botones} title='Iniciar sesión' onPress={() => props.navigation.navigate('IniciarSesion')}></BotonIniciarSesion>
        <BotonCrearCuenta title='Crear cuenta' onPress={() => props.navigation.navigate('CrearCuenta')}></BotonCrearCuenta>
    </View>
  )
}

const styles = StyleSheet.create({
  fondo: {
    backgroundColor: '#59d102',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  botones:{
    bottom:0
  },
  texto:{
    alignSelf: 'center',
    //fontFamily: 'sans-serif',
    justifyContent: 'center',
    width: '70%',
  },
  textoName:{
    alignSelf:'center',
    justifyContent: 'center',
    fontWeight:'bold',
    fontSize:'32',
    width: '50%',
  }
});

export default Portada;