import React from 'react';
import { View, Text, Button } from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {LocaleConfig} from 'react-native-calendars';

const Turnos = (props) => {
  LocaleConfig.locales['fr'] = {
    monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 
                 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
    monthNamesShort: ['Ene.', 'Feb.', 'Mar', 'Abr', 'May', 'Jun', 'Jul.', 'Ago', 'Sept.', 'Oct.', 'Nov.', 'Dic.'],
    dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
    dayNamesShort: ['Dom.', 'Lun.', 'Mar.', 'Miér.', 'Jue.', 'Vie.', 'Sáb.'],
    today: "Hoy"
  };
  LocaleConfig.defaultLocale = 'fr';

  const obtenerTurnos = () => {
    const turnos = {'2022-05-16': {selected: true, selectedColor: 'yellow'},
    '2022-05-17': {marked: true},
    '2022-05-18': {marked: true, dotColor: 'red', activeOpacity: 0},
    '2022-05-19': {disabled: true, disableTouchEvent: true}}
    return turnos
  }

  return (
    <View>
      <Calendar
        markedDates={obtenerTurnos()}

        minDate={'2022-05-01'}
        onDayPress={day => {
          props.navigation.navigate('DetallesTurno', {date: day.dateString});
          console.log('selected day', day);
        }}
      />
      <Text></Text>
      <Button title='Agendar turno' onPress={() => props.navigation.navigate('CrearTurno')}/>
    </View>
  )
}

export default Turnos;