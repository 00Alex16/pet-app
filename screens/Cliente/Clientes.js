import React from 'react';
import { View, Text, ScrollView, Button } from 'react-native';

const Clientes = (props) => {
  return (
    <ScrollView>
      <Button title='Agregar cliente' onPress={() => props.navigation.navigate('AgregarCliente')}/>
    </ScrollView>
  )
}

export default Clientes;