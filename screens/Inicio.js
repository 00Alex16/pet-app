import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { BtnCalendario, BtnClientes, BtnRecordatorios, BtnReferencias } from './components/BtnInicio';

const Inicio = (props) => {
  return (
    <View>
      <Text>
        Página de inicio.
      </Text>
      <View style={styles.container}>
        <BtnClientes title='Clientes' onPress={() => props.navigation.navigate('Clientes')} />
        <BtnCalendario title='Calendario' onPress={() => props.navigation.navigate('Calendario')} />
      </View>
      <View style={styles.container}>
        <BtnRecordatorios title='Recordatorios' onPress={() => props.navigation.navigate('Recordatorios')} />
        <BtnReferencias title='Referencias' onPress={() => props.navigation.navigate('Referencias')} />
      </View>
      {/* <Button title='Clientes' onPress={() => props.navigation.navigate('Clientes')}/>
      <Button title='Calendario' onPress={() => props.navigation.navigate('Calendario')}/>
      <Button title='Recordatorios' onPress={() => props.navigation.navigate('Recordatorios')}/>
      <Button title='Referencias' onPress={() => props.navigation.navigate('Referencias')}/> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    justifyContent: 'center',
    top: 250,
    marginBottom: 20,
  }
})

export default Inicio;