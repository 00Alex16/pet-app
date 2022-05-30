import React, { useState } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { BtnGeneral } from './components/BtnGeneral';
import { LinearGradient } from 'expo-linear-gradient';

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
      <LinearGradient
        // Background Linear Gradient
        colors={['rgba(0,184,255,0.8)', 'transparent']}
        style={{position:'absolute',height: '60%',left: 0,
        right: 0,
        top: 0,}}
      />
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
      </View>
      <View style={styles.btn}>
        <BtnGeneral title='Iniciar sesión' onPress={() => iniciarSesion()} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  textos:{
    width: '70%',
    margin:12,
    borderBottomWidth: 1,
    padding:20,
  },
  container:{
    alignItems: 'center',
    justifyContent: 'center',
    top: '40%',
  },
  btn:{
    marginTop: '60%',
  }
})

export default IniciarSesion;