import React from 'react';
import { View, Text, Button } from 'react-native';

const DetallesTurno = (props) => {
  const date = props.route.params.date;

  const renderizarTurnos = () => {
    let comps = []
    const turnos = [{"fecha":date, "hora":"11:30", "cliente":"Pepito"},
                    {"fecha":date, "hora":"04:30", "cliente":"Pepita"}]
    for (let turno of turnos) {
      comps.push(<View key={turno.cliente}>
                  <Text>Hora: {turno.hora}</Text>
                  <Text>Cliente: {turno.cliente}</Text>
                  <Button title='Editar turno' onPress={() => props.navigation.navigate('CrearTurno')}/>
                </View>)
    }
    return comps
  }

  return (
    <View>
      <Text>Turnos para la fecha: {date}</Text>
      <View>{ renderizarTurnos() }</View>
    </View>
  )
}

export default DetallesTurno;