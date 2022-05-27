import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import fondo from './img/fondo.jpg';
import { BotonCrearCuenta, BotonIniciarSesion } from './components/BotonesPortada';
//const uri = 'https://www.xtrafondos.com/wallpapers/resized/degradado-difuminado-verde-7936.jpg?s=large';


const Portada = (props) => {
  return (
      <View style={styles.fondo}>
        <Text>
          Hola papus como estan espero que esten muy Bien 
          que estan haciendo el dia de hoy 
        </Text>
        <BotonIniciarSesion style={styles.botones} title='Iniciar sesión' onPress={() => props.navigation.navigate('IniciarSesion')}></BotonIniciarSesion>
        <BotonCrearCuenta title='Crear cuenta' onPress={() => props.navigation.navigate('CrearCuenta')}></BotonCrearCuenta>
      </View>
  );
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