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
        <Text>
          Hola papus como estan espero que esten muy Bien 
          que estan haciendo el dia de hoy 
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
  }
});

export default Portada;