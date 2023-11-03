/** @format */

import 'react-native-gesture-handler';
import React from 'react';
import {
 View,
 Text,
 S1tyleSheet
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import { createDrawerNavigator } from '@react-navigation/drawer';

import { NavigationContainer } from '@react-navigation/native';

// Home MainStack
import HomeScreen from '../screens/Home/HomeScreen';

// Pedido da MesaScreen
import PedidosMesaScreen from '../screens/Apps/Mesa/PedidosMesaScreen';

// Pedido da Comanda
import PedidoComanda from '../screens/Apps/User/PedidoComanda';

// Abrir a Mesa
import AbrirMesa from '../screens/Apps/AbrirMesa';

// Criar a Mesa
import CriarMesa from '../screens/Apps/User/CriarMesa';

// Criar a Comanda
import CriarComanda from '../screens/Apps/Mesa/CriarComanda';

import MyDraggable from '../screens/Apps/Mesa/MyDraggableComponent';

// Drawer Customizada
import CustomDrawer from './CustomDrawer';

const Drawer = createDrawerNavigator();

export default function MainStack() {
 return (
  <Drawer.Navigator
   drawerContent={(props) => (
    <CustomDrawer {...props} />
   )}
   initialRouteName='Home'
   screenOptions={{
    drawerActiveTintColor: '#cecece',
    // drawerInactiveTintColor: '#333',
    headerTitleAlign: 'center',
    // headerTintColor: '#273743',
    headerTitle: 'Habitoos'
    //headerTransparent: true,
   }}>
   <Drawer.Screen
    name='Abrir Mesa'
    component={AbrirMesa}
   />
   <Drawer.Screen
    name='Criar Mesa'
    component={CriarMesa}
   />

   <Drawer.Screen
    name='Home'
    component={HomeScreen}
   />

   <Drawer.Screen
    name='PedidosMesaScreen'
    component={PedidosMesaScreen}
   />

   <Drawer.Screen
    name='MyDraggable'
    component={MyDraggable}
   />
  </Drawer.Navigator>
 );
}
