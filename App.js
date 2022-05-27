import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Portada from './screens/Portada';
import IniciarSesion from './screens/IniciarSesion';
import CrearCuenta from './screens/CrearCuenta';
import Inicio from './screens/Inicio';
import Clientes from './screens/Cliente/Clientes';
import Turnos from './screens/Turno/Turnos';
import Recordatorios from './screens/Recordatorios';
import Referencias from './screens/Referencias';
import AgregarCliente from './screens/Cliente/AgregarCliente';
import DetallesCliente from './screens/Cliente/DetallesCliente';
import DetallesTurno from './screens/Turno/DetallesTurno';
import CrearTurno from './screens/Turno/CrearTurno';

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Portada' component={Portada} options={{ title: 'My home', headerStyle: { backgroundColor: '#f4511e' },}}/>
      <Stack.Screen name='IniciarSesion' component={IniciarSesion}/>
      <Stack.Screen name='CrearCuenta' component={CrearCuenta}/>
      <Stack.Screen name='Inicio' component={Inicio}/>
      <Stack.Screen name='Clientes' component={Clientes}/>
      <Stack.Screen name='Turnos' component={Turnos}/>
      <Stack.Screen name='Recordatorios' component={Recordatorios}/>
      <Stack.Screen name='Referencias' component={Referencias}/>
      <Stack.Screen name='AgregarCliente' component={AgregarCliente}/>
      <Stack.Screen name='DetallesCliente' component={DetallesCliente}/>
      <Stack.Screen name='DetallesTurno' component={DetallesTurno}/>
      <Stack.Screen name='CrearTurno' component={CrearTurno}/>
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack>
      </MyStack>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  /* imagen:{
    ...StyleSheet.absoluteFill,
    width:'100%',
    height:'100%',
    resizeMode:'cover',
  } */
});
