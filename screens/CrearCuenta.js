import React, {useState} from 'react';
import { View, Text, ScrollView, TextInput, Button, StyleSheet } from 'react-native';
import { BtnGeneral } from './components/BtnGeneral';
import { LinearGradient } from 'expo-linear-gradient';

const CrearCuenta = (props) => {

  const [state, setState] = useState({
    nombreVeterinaria: '',
    nombre: '',
    apellido: '',
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
        <View>
          <TextInput style={styles.textos}
            placeholder='Nombre de la veterinaria'
            onChangeText={(value) => handleChangeText('nombreVeterinaria', value)}
          />
        </View>
        <View>
          <TextInput style={styles.textos}
            placeholder='Nombre'
            onChangeText={(value) => handleChangeText('nombre', value)}
          />
        </View>
        <View>
          <TextInput style={styles.textos}
            placeholder='Apellido'
            onChangeText={(value) => handleChangeText('apellido', value)}
          />
        </View>
        <View>
          <TextInput style={styles.textos}
            placeholder='Telefono'
            keyboardType='numeric'
            onChangeText={(value) => handleChangeText('telefono', value)}
          />
        </View>
        <View>
          <TextInput style={styles.textos}
            placeholder='Correo electrónico'
            keyboardType='email-address'
            onChangeText={(value) => handleChangeText('correo', value)}
          />
        </View>
        <View>
          <TextInput style={styles.textos}
            placeholder='Contraseña'
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
  textos:{
    height:30,
    width: 350,
    margin:12,
    borderBottomWidth: 1,
    padding:20,
  },
  container:{
    alignItems: 'center',
    justifyContent: 'center',
    top: '10%',
  },
  boton:{
    top: '20%',
  }
})

export default CrearCuenta;