/** @format */

import React, { useState } from 'react';
import {
 View,
 Text,
 StyleSheet,
 Pressable
} from 'react-native';

const Comanda = () => {
 const listaComanda = [
  {
   itemComanda: 'Arroz Com Fritas',
   preco: '835.40'
  }
 ];

 const [quantidadeItens, setQuantidadeItens] =
  useState({});

 const handleContIten = (itemComanda) => {
  setQuantidadeItens((prevQuantidadeItens) => {
   const updatedQuantidadeItens = {
    ...prevQuantidadeItens
   };
   updatedQuantidadeItens[itemComanda] =
    (updatedQuantidadeItens[itemComanda] || 0) +
    1;
   return updatedQuantidadeItens;
  });
 };

 return (
  <View style={styles.container}>
   <View style={styles.header}>
    <Text style={styles.headerTitleitemComanda}>
     DESCRIÇÃO
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
     <Pressable
      onPress={() =>
       handleContIten(item.itemComanda)
      }>
      <Text style={styles.comandaPreco}>
       {quantidadeItens[item.itemComanda] || 0}
      </Text>
     </Pressable>
     <Text style={styles.comandaPreco}>
      {item.preco}
     </Text>
    </View>
   ))}

   <View style={styles.mesaRigth}>
    <Text style={styles.mesaTotal}>
     Valor: 1.000,00
    </Text>
    <Text style={styles.mesaTotal}>
     Final: 1.010.00,00
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
  padding: 2,
  width: '99%'
 },
 header: {
  flexDirection: 'row'
 },
 mesaRigth: {
  left: 255,
  justifyContent: 'flex-start'
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
