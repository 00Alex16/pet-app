import React from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';
//import LinearGradient from 'react-native-linear-gradient';

const Portada = (props) => {
  return (
    //<LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={{flex: 1}}>
    <View>
      <Button title='Iniciar sesión' onPress={() => props.navigation.navigate('IniciarSesion')}/>
      <Button title='Crear cuenta' onPress={() => props.navigation.navigate('CrearCuenta')}/>
    </View>
    //</LinearGradient>
  )
}

const styles = StyleSheet.create({
  fondo: {
    backgroundColor: '#44CFCB',
    flex: 1
  },
  red : {
    color: 'red'
  }
});

export default Portada;