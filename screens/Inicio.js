import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { BtnCalendario, BtnClientes, BtnRecordatorios, BtnReferencias } from './components/BtnInicio';
import { LinearGradient } from 'expo-linear-gradient';

const Inicio = (props) => {
  return (
    <View>
      <LinearGradient
        // Background Linear Gradient
        colors={['rgba(0,184,255,0.8)', 'transparent']}
        style={{position:'absolute',height: '50%',left: 0,
        right: 0,
        top: 0,}}
      />
      <Text>
        Página de inicio.
      </Text>
      <View style={styles.container}>
        <View style={styles.columnas}>
          <BtnClientes title='Clientes' onPress={() => props.navigation.navigate('Clientes')} />
        </View>
        <View style={styles.columnas}>
          <BtnCalendario title='Calendario' onPress={() => props.navigation.navigate('Calendario')} />
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.columnas}>
          <BtnRecordatorios title='Recordatorios' onPress={() => props.navigation.navigate('Recordatorios')} />
        </View>
        <View style={styles.columnas}>
          <BtnReferencias title='Referencias' onPress={() => props.navigation.navigate('Referencias')} />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    justifyContent: 'center',
    top: 200,
  },
  columnas:{
    margin: 10,
  }
})

export default Inicio;