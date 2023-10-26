/** @format */

import React from 'react';
import {
 View,
 Text,
 StyleSheet
} from 'react-native';

const Comanda = () => {
 // Dados da comanda vindo do banco de dados ou da API
 const listaComanda = [
  {
   itemComanda: 'Arroz Com Fritas',
   quantidade: 2,
   preco: '835.40'
  },
  {
   itemComanda: 'Coca Cola 2l',
   quantidade: 1,
   preco: '25.00'
  },
  {
   itemComanda: 'Agua Mineral 500ml',
   quantidade: 2,
   preco: '5.40'
  }
  // Adicione mais itens da comanda aqui
 ];

 return (
  <View style={styles.container}>
   <View style={styles.header}>
    <Text style={styles.headerTitleitemComanda}>
     DESCRIÇÃO
    </Text>
    <Text style={styles.headerTitlePreco}>
     QUANT.
    </Text>
    <Text style={styles.headerTitlePreco}>
     PREÇO
    </Text>
   </View>

   {listaComanda.map((item, index) => (
    <View
     style={styles.comandaCard}
     key={index}>
     <Text style={styles.comandaTitle}>
      {item.itemComanda}
     </Text>

     <Text style={styles.comandaPreco}>
      {item.quantidade}
     </Text>

     <Text style={styles.comandaPreco}>
      {item.preco}
     </Text>
    </View>
   ))}

   <Text style={styles.taxaMesa}>
    Taxa : 10% da Mesa {''}
    {/* Opcinal*/}
   </Text>
   <Text style={styles.taxaMesa}>
    Taxa Couver : 50.00 da Mesa {''}
    {/* Opcinal*/}
   </Text>
     {/*Desejo alinhar a Direita */}
   <View style={styles.mesaRigth}>
    <Text style={styles.mesaTotal}>
     Valor: 1.000,00 {''}
     {/*calculo dos itens*/}
    </Text>
    <Text style={styles.mesaTotal}>
     Final: 1.010.00,00 {''}
     {/*
     Soma dos valor mais a 
     Taxa e o Coouver
     */}
    </Text>
   </View>
  </View>
 );
};

// Estilos
const styles = StyleSheet.create({
 container: {
  flex: 1,
  backgroundColor: '#f2f2f2',
  // borderBottomWidth: 2,
  // borderColor: '#cecece',
  padding: 2,
  width: '99%'
 },
 header: {
  flexDirection: 'row'
 },
 mesaRigth: {
  left: 255
 },
 comandaCard: {
  flexDirection: 'row',
  margin: 5
 },
 comandaTitle: {
  width: 250,
  borderBottomWidth: 1,
  borderColor: '#cecece'
 },
 mesaTotal: {
  fontWeight: 'bold'
 },
 comandaPreco: {
  marginLeft: 8,
  padding: 5,
  borderBottomWidth: 1,
  borderColor: '#cecece'
 },
 headerTitleitemComanda: {
  margin: 3,
  fontWeight: 'bold',
  fontSize: 14,
  width: 220,
  borderBottomWidth: 1,
  borderColor: '#cecece',
  textAlign: 'center',
  padding: 2
 },
 headerTitlePreco: {
  margin: 3,
  fontWeight: 'bold',
  fontSize: 14,
  width: 70,
  borderBottomWidth: 1,
  borderColor: '#cecece',
  textAlign: 'center',
  padding: 2
 }
});

export default Comanda;
