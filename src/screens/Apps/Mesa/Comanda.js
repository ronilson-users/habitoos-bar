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
   itemComanda: 'Porção de Fritas ',
   preco: 70.50
  },
  {
   itemComanda: 'Coca Cola 2l',
   preco: 10.50
  },
  {
   itemComanda: 'Bife A cavala',
   preco: 120.50
  },
  // Adicione outros itens à lista com seus preços
 ];

 const [quantidadeItens, setQuantidadeItens] =
  useState({});
 const [totalComanda, setTotalComanda] =
  useState(0);

 const handleContIten = (itemComanda) => {
  setQuantidadeItens((prevQuantidadeItens) => ({
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
  if (quantidadeItens[itemComanda] > 0) {
   setQuantidadeItens((prevQuantidadeItens) => ({
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

    <Text style={styles.headerTitle}>
    PREÇO</Text>
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
       <Text style={styles.controlButtonMenos}>-</Text>
      </Pressable>
      <Text style={styles.quantityText}>
       {quantidadeItens[item.itemComanda] || 0}
      </Text>
      <Pressable
       onPress={() =>
        handleContIten(item.itemComanda)
       }>
       <Text style={styles.controlButtonMais }>+</Text>
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
  fontWeight: 'bold',
 },
 comandaCard: {
  flexDirection: 'row',
  margin: 5,
  borderBottomWidth: 1,
  borderColor: '#cecece',
  width: 350,
  justifyContent: 'space-between',
  padding: 2
 },
 comandaTitle: {
  width: 200,
  fontWeight: 'bold',
  
 },
 comandaPreco: {
  marginLeft: 8,
  padding: 5
 },
 quantityControls: {
  flexDirection: 'row',
  alignItems: 'center',
  gap: 14
 },
 controlButtonMais: {
  fontSize: 25,
  marginRight: 10,
  color: 'green',
  borderColor: '#cecece',
  borderWidth :1,
  borderRadius:5,
  padding :5,
  alignItems : 'center',
  height:35,
  gap : 2,
  width :35,
  textAlign : 'center'
 },
 controlButtonMenos: {
  fontSize: 30,
  marginRight: 10,
  color: 'red',
  borderColor: '#cecece',
  borderWidth :1,
  borderRadius:5,
  padding :5,
  alignItems : 'center',
  height:35,
  gap : 2,
  width :35,
  textAling : 'center'
 },
 quantityText: {
  fontSize: 16
 },
 totalContainer: {
  alignItems: 'flex-end',
  padding: 10
 },
 totalText: {
  fontWeight: 'bold',
  fontSize: 16
 }
});

export default Comanda;
