import React, {useState} from 'react';
import { View, ScrollView, TextInput, StyleSheet, Text } from 'react-native';
import { BtnGeneral } from './components/BtnGeneral';
import { LinearGradient } from 'expo-linear-gradient';

const CrearCuenta = (props) => {

  const [state, setState] = useState({
    nombreVeterinaria: '',
    nombre: '',
    apellido: '',
    cedula: '',
    telefono: '',
    correo: '',
    password: ''
  });

  const handleChangeText = (name, value) => {
    setState({ ...state, [name]: value});
  }

  const crearUsuario = () => {
    let datosCompletos = true
    Object.entries(state).forEach(([key, value]) => {
      if (value == '') {
        datosCompletos = false
      }
    })
    if (datosCompletos) {
      props.navigation.navigate('Portada');
    } else {
      alert('Ingresa toda la información solicitada');
    }
  }

  return (
    <ScrollView>
      <LinearGradient
        // Background Linear Gradient
        colors={['rgba(0,184,255,0.8)', 'transparent']}
        style={{position:'absolute',height: '60%',left: 0,
        right: 0,
        top: 0,}}
      />
      <View style={styles.container}>
        <View style={styles.ancho}>
          <Text>Nombre de la Veterinaria</Text>
          <TextInput
            onChangeText={(value) => handleChangeText('nombreVeterinaria', value)}
          />
        </View>
        <View style={styles.ancho}>
          <Text>Nombre</Text>
          <TextInput
            placeholder='Nombre'
            onChangeText={(value) => handleChangeText('nombre', value)}
          />
        </View>
        <View style={styles.ancho}>
          <Text>Apellido</Text>
          <TextInput
            onChangeText={(value) => handleChangeText('apellido', value)}
          />
        </View>
        <View style={styles.ancho}>
          <Text>Cédula</Text>
          <TextInput
            keyboardType='numeric'
            onChangeText={(value) => handleChangeText('cedula', value)}
          />
        </View>
        <View style={styles.ancho}>
          <Text>Telefono</Text>
          <TextInput
            keyboardType='numeric'
            onChangeText={(value) => handleChangeText('telefono', value)}
          />
        </View>
        <View style={styles.ancho}>
          <Text>Correo electrónico</Text>
          <TextInput
            keyboardType='email-address'
            onChangeText={(value) => handleChangeText('correo', value)}
          />
        </View>
        <View style={styles.ancho}>
          <Text>Contraseña</Text>
          <TextInput
            secureTextEntry={true}
            onChangeText={(value) => handleChangeText('password', value)}
          />
        </View>
      </View>
      <View style={styles.boton}>
        <BtnGeneral title='Crear usuario' onPress={() => crearUsuario()}/>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ancho:{
    width: '80%',
    borderBottomWidth: 1,
    margin:10,
  },
  container:{
    alignItems: 'center',
    justifyContent: 'center',
  },
  boton:{
    top: 40,
    marginBottom: 40
  }
})

export default CrearCuenta;