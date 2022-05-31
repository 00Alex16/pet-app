import React, {useState} from 'react';
import { View, Text, ScrollView, TextInput, StyleSheet } from 'react-native';
import { BtnGeneral } from '../components/BtnGeneral';
import { LinearGradient } from 'expo-linear-gradient';

const AgregarCliente = (props) => {
  // Mirar si se puede usar la misma plantilla para las operaciones de lectura, editar, y crear
  const [state, setState] = useState({
    nombre: '',
    apellido: '',
    cedula: '',
    ciudad: '',
    telefono: '',
    correo: '',
    observaciones: ''
  });

  const handleChangeText = (name, value) => {
    setState({ ...state, [name]: value});
  }

  const agregarCliente = () => {
    Object.entries(state).forEach(([key, value]) => {
      if (value == '') {
        datosCompletos = false
      }
    })
    if (datosCompletos) {
      props.navigation.navigate('Clientes');
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
          <Text>Nombre</Text>
          <TextInput
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
          <Text>Ciudad</Text>
          <TextInput
            onChangeText={(value) => handleChangeText('ciudad', value)}
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
          <Text>Observaciones</Text>
          <TextInput
            onChangeText={(value) => handleChangeText('observaciones', value)}
          />
        </View>
      </View>
      <View style={styles.boton}>
        <BtnGeneral title='Agregar cliente' onPress={() => agregarCliente()} />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ancho:{
    width: '70%',
    borderBottomWidth: 1,
    margin:10,
  },
  container:{
    alignItems: 'center',
    justifyContent: 'center',
  },
  boton:{
    top: '5%',
    marginBottom: '10%',
  }
})

export default AgregarCliente;