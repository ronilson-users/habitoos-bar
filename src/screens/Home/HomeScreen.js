/** @format */

import React from 'react';
import { useCallback } from 'react';
import {
 Text,
 View,
 StyleSheet,
 Pressable,
 Alert
} from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import axios from 'axios';

import GerarQrcode from './GerarQrcode';


// a mesa esta pronta para iniciar pedidos
const usuarioLogado = {
 user: 'Joao Paulo'
};

export default function HomeScreen({}) {
 
 
 const handlerAbrirPedidos = async () => {
  alert('Inserir Pedido');
  try {
   const newMesaData = {
    numeroMesa: mesa.mesaQrcode,
    garcon: mesa.user,
    disponivel: true,
    usuarios: [], // Inicialmente, nenhum usuário na mesa
    pedidoMesa: [] // Inicialmente,nehum pedido
   };

   const response = await axios.post(
    'http://localhost:4000/mesas/ ',
    newMesaData
   );

   // Após a resposta bem-sucedida, você pode atualizar o estado do seu aplicativo, como lista de mesas, conforme necessário.

   console.log(
    'Mesa criada com sucesso:',
    response.data
   );
  } catch (error) {
   console.error('Erro ao criar a mesa:', error);
  }
 };
 

 return (
  <View style={styles.container}>
   <View style={styles.praca}>
    {/* grid de mesas */}
    <View style={styles.mesaPronta}>
     <Pressable onPress={handlerAbrirPedidos}>
      <Text>Mesa :{''}</Text>
      <Text>Nome :{''}</Text>
      <Text>Status :{''}</Text>
     </Pressable>
    </View>
   </View>
   <GerarQrcode />


  </View>
 );
}

const styles = StyleSheet.create({
 container: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center'
 },
 praca: {
  width: '95%'
 },
 mesaPronta: {
  borderWidth: 1,

  borderRadius: 5,
  borderColor: 'blueviolet',
  padding: 10,
  margin: 5
 }
});
