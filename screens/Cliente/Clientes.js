import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Button } from 'react-native';
import { ListItem } from "react-native-elements";

const Clientes = (props) => {
  const [clientes, setclientes] = useState([]);

  useEffect(() => {
    const clientes = [{"id":7,"nombre":"Pepe","correo":"Pepe@mail.com"},
                      {"id":3,"nombre":"Pepa","correo":"Pepa@mail.com"}];
    setclientes(clientes);
  }, []);

  return (
    <ScrollView>
      {clientes.map((cliente) => {
        return (
          <ListItem 
            key={cliente.id} 
            bottomDivider
            onPress={() => {
              props.navigation.navigate("DetallesCliente", {
                id: cliente.id,
              });
            }}
          >
            <ListItem.Content>
              <ListItem.Title>{cliente.nombre}</ListItem.Title>
              <ListItem.Subtitle>{cliente.correo}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        )
      })}
      <Button title='Agregar cliente' onPress={() => props.navigation.navigate('AgregarCliente')}/>
    </ScrollView>
  )
}

export default Clientes;