import React from 'react';
import { View, Button } from 'react-native';

const Portada = (props) => {
  return (
    <View>
      <Button title='Iniciar sesión' onPress={() => props.navigation.navigate('IniciarSesion')}/>
      <Button title='Crear cuenta' onPress={() => props.navigation.navigate('CrearCuenta')}/>
    </View>
  )
}

export default Portada;