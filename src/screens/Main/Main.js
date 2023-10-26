import 'react-native-gesture-handler';
import * as React from 'react';

import {
 Button,
 Text,
 View, ActivityIndicator
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { createDrawerNavigator } from '@react-navigation/drawer';

import Ionicons from '@expo/vector-icons/Ionicons';

// import DetailsScreen from './src/screens/DetailsScreen';

 import HomeScreen from '../../screens/Home';
import HomeScreen from
'../../screens/Home';
// import SettingsScreen from './src/screens/SettingsScreen';

// import SignIn from '../../screens/User/SignInScreen';

// import SignUp from './src/screens/User/SignUpScreen';

function SplashScreen() {
 return (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
   <ActivityIndicator size="large" />
  </View>
 );
}

function DetailsScreen() {
 return (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
   <Text>Details!</Text>
  </View>
 );
}

// function HomeScreen({ navigation }) {
//  return (
//   <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//    <Text>Home screen</Text>
//    <Button
//     title="Go to Details"
//     onPress={() => navigation.navigate('Details')}
//    />
//   </View>
//  );
// }

// function SettingsScreen({ navigation }) {
//  return (
//   <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//    <Text>Settings screen</Text>
//    <Button
//     title="Go to Details"
//     onPress={() => navigation.navigate('Details')}
//    />
//   </View>
//  );
// }

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
 return (
  <HomeStack.Navigator screenOptions={{ headerShown: false
    
   }} initialRouteName="Home">

   <HomeStack.Screen name="Home" component={HomeScreen}
    options={{ HeaderShow: false }} />

   <HomeStack.Screen name="Details" component={DetailsScreen} />

  </HomeStack.Navigator>

 );
}



const AuthStack = createNativeStackNavigator();

function AuthStackScreen() {
 return (
  <AuthStack.Navigator initialRouteName="SignIn">

   <AuthStack.Screen name="SignIn" component={SignInScreen}
    options={{ HeaderShow: false }} />

   <AuthStack.Screen name="SignUp" component={SignUpScreen} />

  </AuthStack.Navigator>
 );
}

const SettingsStack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

function SettingsStackScreen() {
 return (
  <Drawer.Navigator>

   <Drawer.Screen
    name="Home"
    component={HomeScreen}
    options={{
     drawerIcon: ({ color }) => (
      <Ionicons name="home-outline" size={22} color={color} />
     )
    }} />

   <Drawer.Screen name="Details" component={DetailsScreen}
    options={{
     drawerIcon: ({ color }) => (
      <Ionicons name="home-outline" size={22} color={color} />
     )
    }} />


  </Drawer.Navigator>
 );
}

const Tab = createBottomTabNavigator();

export default function Main() {

 const [isLoading, setIsLoading] = React.useState(true);

 const [userToken, setUserToken] = React.useState(null);

 const getUserToken = async () => {

  const seleep = ms => new Promise((r) => setTimeout(r, ms));
  try {
   await seleep(2000);
   const token = null;
   setUserToken('token');
  } finally {
   setIsLoading(false);
  }
 };

 React.useEffect(() => {
  getUserToken();
 }, []);

 if (isLoading) {
  return <SplashScreen />
 }





 return (
  <NavigationContainer>
   {/*{userToken == null ? () : ()} */}
   <Tab.Navigator screenOptions={{ headerShown: false
    
   }}>


    <Tab.Screen name="Inicio" component={HomeStackScreen} options={
     {
     
      tabBarIcon: ({ color }) => (
       <Ionicons name="home-outline" size={22} color={color} />
      )
     }} />

    <Tab.Screen name="Config" component={SettingsStackScreen}
     options={{
      tabBarIcon: ({ color }) => (
       <Ionicons name="settings-outline" size={22} color={color} />
      )
     }}
    />
   </Tab.Navigator>
  </NavigationContainer>
 );
}