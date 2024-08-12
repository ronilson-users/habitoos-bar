/** @format */

import React, { useState } from 'react';
import {
 View,
 Text,
 StyleSheet,
 Pressable
} from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';

const Comanda = () => {
 // prover de json
 const listaComanda = [
  {
   itemComanda:
    'Porção de Fritas Acebola Inteira ',
   preco: 70.5
  },
  {
   itemComanda: 'Coca Cola 2l',
   preco: 10.5
  },
  {
   itemComanda: 'Bife A cavala',
   preco: 120.5
  }
  // Adicione outros itens à lista com seus preços
 ];

 const [qtdItens, SetQtdItens] =
  useState({});
 const [totalComanda, setTotalComanda] =
  useState(0);

 const handleContIten = (itemComanda) => {
  SetQtdItens((prevQuantidadeItens) => ({
   ...prevQuantidadeItens,
   [itemComanda]:
    (prevQuantidadeItens[itemComanda] || 0) + 1
  }));
  setTotalComanda(
   totalComanda +
    listaComanda.find(
     (item) => item.itemComanda === itemComanda
    ).preco
  );
 };

 const handleDecreaseItem = (itemComanda) => {
  if (qtdItens[itemComanda] > 0) {
   SetQtdItens((prevQuantidadeItens) => ({
    ...prevQuantidadeItens,
    [itemComanda]:
     prevQuantidadeItens[itemComanda] - 1
   }));

   setTotalComanda(
    totalComanda -
     listaComanda.find(
      (item) => item.itemComanda === itemComanda
     ).preco
   );
  }
 };

 return (
  <View style={styles.container}>
   <View style={styles.header}>
    <Text style={styles.headerTitle}>
     DESCRIÇÃO
    </Text>

    <Text style={styles.headerTitle}>PREÇO</Text>
   </View>

   {listaComanda.map((item, index) => (
    <View
     style={styles.comandaCard}
     key={index}>
     <Text style={styles.comandaTitle}>
      {item.itemComanda}
     </Text>
     <View style={styles.quantityControls}>
      <Pressable
       onPress={() =>
        handleDecreaseItem(item.itemComanda)
       }>
       <Ionicons
        name='remove-outline'
        size={20}
        color='#fff'
        style={styles.controlButtonMenos}
       />
      </Pressable>
      <Text style={styles.quantityText}>
       {qtdItens[item.itemComanda] || 0}
      </Text>
      <Pressable
       onPress={() =>
        handleContIten(item.itemComanda)
       }>
       <Ionicons
        name='add-outline'
        size={18}
        color='#fff'
        style={styles.controlButtonMais}
       />
      </Pressable>
     </View>
     <Text style={styles.comandaPreco}>
      {item.preco}
     </Text>
    </View>
   ))}

   <View style={styles.totalContainer}>
    <Text style={styles.totalText}>
     Valor Total: {totalComanda.toFixed(2)}
    </Text>
   </View>
  </View>
 );
};

const styles = StyleSheet.create({
 container: {
  flex: 1,
  backgroundColor: '#f2f2f2',
  padding: 2
 },
 header: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  borderBottomWidth: 1,
  borderColor: '#cecece',
  padding: 2,
  
 },
 comandaCard: {
  flexDirection: 'row',
  margin: 5,
  borderBottomWidth: 1,
  borderColor: '#cecece',
  width: 300,
  justifyContent: 'space-between',
  padding: 2
 },
 comandaTitle: {
  width: 180,
  
 },
 comandaPreco: {
  marginLeft: 8,
  padding: 5
 },
 quantityControls: {
  flexDirection: 'row',
  alignItems: 'center',
  gap: 10
 },
 controlButtonMais: {
  backgroundColor: 'green',
  borderColor: '#cecece',
  borderWidth: 1,
  borderRadius: 5,
  padding: 7,
  alignItems: 'center',
  height: 30,
  width: 30
 },
 controlButtonMenos: {
  backgroundColor: 'red',
  borderColor: '#cecece',
  borderWidth: 1,
  borderRadius: 5,
  padding: 7,
  alignItems: 'center',
  height: 30,
  width: 30
 },
 quantityText: {
  fontSize: 16
 },
 totalContainer: {
	 top : 15,
  alignItems: 'flex-end',
  padding: 10,
  borderColor: '#cecece',
  borderWidth: 1,
  borderRadius: 5,
 },
 totalText: {
  fontWeight: 'bold',
  fontSize: 16
 }
});

export default Comanda;
