import React, {useState} from 'react';
import { View, Text, Button, ScrollView, TextInput } from 'react-native';

const CrearTurno = (props) => {
  const [state, setState] = useState({
    paciente: '',
    fecha: '',
    hora: '',
    motivo: ''
  });

  const handleChangeText = (name, value) => {
    setState({ ...state, [name]: value});
  }

  const crearTurno = () => {
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
      <Text>Paciente</Text>
      <TextInput
        //placeholder='Nombre de la veterinaria'
        onChangeText={(value) => handleChangeText('paciente', value)}
      />
    </View>
    <View>
      <Text>Fecha</Text>
      <TextInput 
        //placeholder='Nombre'
        onChangeText={(value) => handleChangeText('fecha', value)}
      />
    </View>
    <View>
      <Text>Hora</Text>
      <TextInput 
        //placeholder='Apellido'
        onChangeText={(value) => handleChangeText('hora', value)}
      />
    </View>
    <View>
      <Text>Motivo</Text>
      <TextInput 
        //placeholder='Telefono'
        onChangeText={(value) => handleChangeText('motivo', value)}
      />
    </View>
    <View>
      <Button title='Crear turno' onPress={() => crearTurno()}/>
    </View>
    </ScrollView>
  )
}

export default CrearTurno;