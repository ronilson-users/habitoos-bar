/** @format */

// CustomDrawer

import React from 'react';
import {
 View,
 Text,
 TouchableOpacity,
 StyleSheet,
 Image
} from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';

const CustomDrawer = ({ navigation }) => {
 const navigateToScreen = (screenName) => {
  navigation.navigate(screenName);
 };

 return (
  <View style={styles.container}>
   <View style={styles.imageDrawer}>
    <Image
     source={require('../assets/image/avatar.png')}
     style={styles.image}
    />
    <Text style={styles.drawerTextPerfil}>
     Ronilson
    </Text>
   </View>

   <View style={styles.drawerBar}>
    <TouchableOpacity
     onPress={() => navigateToScreen('Home')}>
     <View style={styles.drawerItem}>
      <Ionicons
       name='home'
       size={18}
       color='#fcfcfc'
       style={styles.drawerIcon}
      />
      <Text style={styles.drawerText}>Home</Text>
     </View>
    </TouchableOpacity>

    <TouchableOpacity
     onPress={() =>
      navigateToScreen('Abrir Mesa')
     }>
     <Text style={styles.drawerText}>
      Abrir Mesa
     </Text>
    </TouchableOpacity>
    
    <TouchableOpacity
     onPress={() =>
      navigateToScreen('Criar Mesa')
     }>
     <Text style={styles.drawerText}>
      Criar Mesa
     </Text>
    </TouchableOpacity>

    <TouchableOpacity
     onPress={() =>
      navigateToScreen('MyDraggable')
     }>
     <Text style={styles.drawerText}>Pedido</Text>
    </TouchableOpacity>
   </View>
  </View>
 );
};
const styles = StyleSheet.create({
 container: {
  flex: 1,
  padding: 20,
  backgroundColor: '#273747' // Cor de fundo do contêiner
 },
 drawerBar: {
  marginTop: 8
 },
 drawerItem: {
  flexDirection: 'row',
  alignItems: 'center'
 },
 drawerText: {
  borderWidth: 1,
  borderColor: '#ccc',
  borderRadius: 5,
  padding: 8,
  margin: 5,
  color: '#fcfcfc'
 },
 drawerTextPerfil: {
  padding: 8,
  marginTop: 5,

  color: '#fcfcfc'
 },
 imageDrawer: {
  marginLeft: 5,
  marginTop: 25,
  borderRadius: 5,
  flexDirection: 'row',
  alignItems: 'center'
 },
 image: {
  width: 100,
  height: 100
 }
});
export default CustomDrawer;
