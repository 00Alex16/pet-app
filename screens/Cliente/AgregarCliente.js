import React, {useState} from 'react';
import { View, Text, ScrollView, TextInput, Button } from 'react-native';

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
        alert('Ingresa toda la información solicitada');
        return;   // No está terminando la función al darse la alerta y hace la redirección
      }
    })
    props.navigation.navigate('Clientes');
  }

  return (
    <ScrollView>
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
        <Text>Cédula</Text>
        <TextInput 
          //placeholder='Cédula'
          onChangeText={(value) => handleChangeText('cedula', value)}
        />
      </View>
      <View>
        <Text>Ciudad</Text>
        <TextInput 
          //placeholder='Ciudad'
          onChangeText={(value) => handleChangeText('ciudad', value)}
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
        <Text>Observaciones</Text>
        <TextInput 
          //placeholder='Observaciones'
          onChangeText={(value) => handleChangeText('observaciones', value)}
        />
      </View>
      <View>
        <Button title='Agregar cliente' onPress={() => agregarCliente()}/>
      </View>
    </ScrollView>
  )
}

export default AgregarCliente;