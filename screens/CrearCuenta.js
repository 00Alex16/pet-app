import React, {useState} from 'react';
import { View, Text, ScrollView, TextInput, Button } from 'react-native';

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
      <View>
        <Text>Nombre de la veterinaria</Text>
        <TextInput
          //placeholder='Nombre de la veterinaria'
          onChangeText={(value) => handleChangeText('nombreVeterinaria', value)}
        />
      </View>
      <View>
        <Text>Nombre</Text>
        <TextInput 
          //placeholder='Nombre'
          onChangeText={(value) => handleChangeText('nombre', value)}
        />
      </View>
      <View>
        <Text>Apellido</Text>
        <TextInput 
          //placeholder='Apellido'
          onChangeText={(value) => handleChangeText('apellido', value)}
        />
      </View>
      <View>
        <Text>Telefono</Text>
        <TextInput 
          //placeholder='Telefono'
          keyboardType='numeric'
          onChangeText={(value) => handleChangeText('telefono', value)}
        />
      </View>
      <View>
        <Text>Correo electrónico</Text>
        <TextInput 
          //placeholder='Correo electrónico'
          keyboardType='email-address'
          onChangeText={(value) => handleChangeText('correo', value)}
        />
      </View>
      <View>
        <Text>Contraseña</Text>
        <TextInput 
          //placeholder='Contraseña'
          secureTextEntry={true}
          onChangeText={(value) => handleChangeText('password', value)}
        />
      </View>
      <View>
        <Button title='Crear usuario' onPress={() => crearUsuario()}/>
      </View>
    </ScrollView>
  )
}

export default CrearCuenta;