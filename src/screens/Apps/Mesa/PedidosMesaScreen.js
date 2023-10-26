/** @format */

import React from 'react';
import {
 View,
 Text,
 StyleSheet,
 Button
} from 'react-native';

import axios from 'axios';

import Comanda from './Comanda';

import CriarComanda from '../Mesa/CriarComanda'

function PedidosMesaScreen({ route }) {
 const { mesa } = route.params;

 const handleCriarMesa = async () => {
  try {
   const newMesaData = {
    numeroMesa: mesa.numeroMesa,
    garcon: mesa.garcon,
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

 if (mesa && mesa.numeroMesa) {
  return (
   <View style={styles.container}>
    <View style={styles.left}>
     <Text style={styles.title}>
      Mesa: {mesa.numeroMesa}
     </Text>
     <View style={styles.right}>
      <View>
       <Button
        title='Salvar Mesa'
        onPress={handleCriarMesa}
       />
      </View>
     </View>
    </View>

    <Text>Garçom: {mesa.garcon}</Text>
    <View style={styles.infoMesa}>
     <Text style={styles.dataLeft}>
      Data: {mesa.currentDate}
     </Text>
     <Text style={styles.horaRight}>
      Hora: {mesa.currentTime}
     </Text>
    </View>

    <View>
     
  <CriarComanda />
    </View>
   </View>
  );
 } else {
  return (
   <View style={styles.container}>
    <Text style={styles.title}>
     Mesa não encontrada
    </Text>
   </View>
  );
 }
}

const styles = StyleSheet.create({
 container: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  // backgroundColor: "#273747",
  padding: 10
 },
 cardNumero: {
  flexDirection: 'row',
  margin: 5
 },
 infoMesa: {
  flexDirection: 'row',
  width: '95%',
  backgroundColor: '#f2f2f2',
  borderBottomWidth: 2,
  borderColor: '#cecece',
  padding: 2,
  margin: 5
 },
 title: {
  fontSize: 24,
  fontWeight: 'bold',
  margin: 20,
  paddingHorizontal: 20,
  paddingVertical: 10,
  borderWidth: 1,
  borderRadius: 5
 },
 button: {
  backgroundColor: 'green',
  paddingHorizontal: 20,
  paddingVertical: 10,
  borderRadius: 5
 },
 buttonText: {
  color: 'white',
  fontSize: 16,
  fontWeight: 'bold'
 }
});

export default PedidosMesaScreen;
