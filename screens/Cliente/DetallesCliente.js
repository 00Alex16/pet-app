import React from 'react';
import { View, Button, Text, Alert } from 'react-native';

const DetallesCliente = (props) => {
  console.log(props);
  const id = props.route.params.id;

  const eliminarCliente = () => {
    console.log("Eliminando cliente...");
  }

  const alertaEliminar = () => 
    Alert.alert(
      'Confirmación',
      '¿Está seguro de eliminar el cliente?',
      [
        {
          text: "Cancelar",
          style: "cancel"
        },
        {
          text: "Aceptar", 
          onPress: () => eliminarCliente()
        }
      ]
    );

  return (
    <View>
      <Text>Id: { id }</Text>
      <Button title='Editar' onPress={() => props.navigation.navigate('AgregarCliente')}/>
      <Button title='Eliminar' onPress={ alertaEliminar }/>
    </View>
  )
}

export default DetallesCliente;