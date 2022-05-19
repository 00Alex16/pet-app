import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

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
    <View>
      <TextInput 
        placeholder='Correo electrónico'
        keyboardType='email-address'
        onChangeText={(value) => handleChangeText('correo', value)}
      />
      <TextInput 
        placeholder='Contraseña'
        secureTextEntry={true}
        onChangeText={(value) => handleChangeText('password', value)}
      />
      <Button title='Iniciar sesión' onPress={() => iniciarSesion()}/>
    </View>
  )
}

const styles = StyleSheet.create({

  })

export default IniciarSesion;