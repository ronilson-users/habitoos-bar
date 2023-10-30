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

import HomeScreen from '../screens/Home/HomeScreen';

import PedidosMesaScreen from '../screens/Apps/Mesa/PedidosMesaScreen';

import PedidoComanda from
'../screens/Apps/User/PedidoComanda';

import AbrirMesa from '../screens/Apps/AbrirMesa';


import CriarMesa from
'../screens/Apps/User/CriarMesa'

import MyDraggable from
'../screens/Apps/Mesa/MyDraggableComponent'

import CriarComanda from
'../screens/Apps/Mesa/CriarComanda'



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
