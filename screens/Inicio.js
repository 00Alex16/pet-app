import React from 'react';
import { View, Text, Button } from 'react-native';

const Inicio = (props) => {
  return (
    <View>
      <Text>
        Página de inicio.
      </Text>
      <Button title='Clientes' onPress={() => props.navigation.navigate('Clientes')}/>
      <Button title='Turnos' onPress={() => props.navigation.navigate('Turnos')}/>
      <Button title='Recordatorios' onPress={() => props.navigation.navigate('Recordatorios')}/>
      <Button title='Referencias' onPress={() => props.navigation.navigate('Referencias')}/>
    </View>
  )
}

export default Inicio;