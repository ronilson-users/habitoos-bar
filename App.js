//App.js
import React from 'react';
//import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import { NavigationContainer } from "@react-navigation/native";

// Rotas de Navegção
import Navigation from './src/routes/Navigation';

import MainStack from './src/routes/MainStack';

import ModalScreen from './src/screens/Modal/Modal';

import SignIn from './src/screens/User/SignInScreen';

import SignUp from './src/screens/User/SignUpScreen';

export default function App() {

 return (

  <NavigationContainer>

   <MainStack />

  </NavigationContainer>
 );
}


