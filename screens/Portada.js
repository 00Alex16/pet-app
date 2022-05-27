import React from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';
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
      <Button title='Iniciar sesión' onPress={() => props.navigation.navigate('IniciarSesion')}/>
      <Button title='Crear cuenta' onPress={() => props.navigation.navigate('CrearCuenta')}/>
    </View>
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