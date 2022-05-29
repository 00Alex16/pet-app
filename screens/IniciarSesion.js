import React, { useState } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { BtnInicioSesion } from './components/BtnInicioSesion';

const IniciarSesion = (props) => {

  const [state, setState] = useState({
    correo: '',
    password: ''
  });

  const handleChangeText = (name, value) => {
    setState({ ...state, [name]: value});
  }

  const iniciarSesion = () => {
    Object.entries(state).forEach(([key, value]) => {
      if (value == '') {
        alert('Ingresa la información solicitada');
        return;   // No está terminando la función al darse la alerta y hace la redirección
      }
    })
    props.navigation.navigate('Inicio');
  }

  return (
    <View style={styles.container}>
      <TextInput style={styles.textos}
        placeholder='Correo electrónico'
        keyboardType='email-address'
        onChangeText={(value) => handleChangeText('correo', value)}
      />
      <TextInput style={styles.textos}
        placeholder='Contraseña'
        secureTextEntry={true}
        onChangeText={(value) => handleChangeText('password', value)}
      />
      <BtnInicioSesion title='Iniciar sesión' onPress={() => iniciarSesion()}/>
    </View>
  )
}

const styles = StyleSheet.create({
  textos:{
    height:40,
    width: '70%',
    margin:12,
    borderBottomWidth: 1,
    padding:20,
  },
  container:{
    alignItems: 'center',
    justifyContent: 'center',
    top: '30%',
  }
})

export default IniciarSesion;