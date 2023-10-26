/** @format */

import React from 'react';
import {
 View,
 Text,
 StyleSheet
} from 'react-native';

import Comanda from './Comanda';

const PedidoComanda = () => {
 return (
  <View style={styles.container}>
   <Text>PedidoComanda</Text>

   <Comanda />
  </View>
 );
};

const styles = StyleSheet.create({
 container: {
  flex: 1,
  backgroundColor: '#3B3B3B'
 }
});
export default PedidoComanda;
