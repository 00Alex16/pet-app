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
      <Stack.Screen name='Portada' component={Portada} options={{ title: '', headerStyle: { backgroundColor: 'rgba(0,184,255,0.8)' },}}/>
      <Stack.Screen name='IniciarSesion' component={IniciarSesion} options={{title: 'Iniciar Sesión',headerStyle: { backgroundColor: 'rgba(0,184,255,0.8)' },}} />
      <Stack.Screen name='CrearCuenta' component={CrearCuenta} options={{title: 'Crear Cuenta',headerStyle: { backgroundColor: 'rgba(0,184,255,0.8)' },}} />
      <Stack.Screen name='Inicio' component={Inicio} options={{ title: 'Inicio', headerStyle: { backgroundColor: 'rgba(0,184,255,0.8)' },}} />
      <Stack.Screen name='Clientes' component={Clientes} options={{title: 'xd', headerStyle: { backgroundColor: 'rgba(0,184,255,0.8)' },}} />
      <Stack.Screen name='Turnos' component={Turnos} options={{ title: 'Turnos', headerStyle: { backgroundColor: 'rgba(0,184,255,0.8)' },}} />
      <Stack.Screen name='Recordatorios' component={Recordatorios} options={{ title: 'Recordatorios', headerStyle: { backgroundColor: 'rgba(0,184,255,0.8)' },}} />
      <Stack.Screen name='Referencias' component={Referencias} options={{ title: 'Referencias (Sintomatologías)', headerStyle: { backgroundColor: 'rgba(0,184,255,0.8)' },}} />
      <Stack.Screen name='AgregarCliente' component={AgregarCliente} options={{ title: 'Agregar Cliente', headerStyle: { backgroundColor: 'rgba(0,184,255,0.8)' },}} />
      <Stack.Screen name='DetallesCliente' component={DetallesCliente} options={{ title: 'Información Cliente', headerStyle: { backgroundColor: 'rgba(0,184,255,0.8)' },}}/>
      <Stack.Screen name='DetallesTurno' component={DetallesTurno} options={{ title: 'Información del Turno', headerStyle: { backgroundColor: 'rgba(0,184,255,0.8)' },}}/>
      <Stack.Screen name='CrearTurno' component={CrearTurno} options={{ title: 'Crear Turno', headerStyle: { backgroundColor: 'rgba(0,184,255,0.8)' },}} />
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
