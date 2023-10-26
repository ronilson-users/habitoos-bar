//AuthStack.js
import { createStackNavigator } from '@react-navigation/Stack';

import { NavigationContainer } from '@react-navigation/native';

import LoginScreen from './src/screens/User/LoginScreen';

import ForgotPasswordScreen from './src/screens/User/ForgotPasswordScreen';

import RegistrationScreen from './src/screens/User/RegistrationScreen'

export default function AuthStack() {
    return (
     
        <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{
                headerShown: false
            }}>
            
            <Stack.Screen 
            name="Login" 
            component={LoginScreen} />
            
            <Stack.Screen 
            name="ForgotPassword" 
            component={ForgotPasswordScreen} />
            
            <Stack.Screen name="Registration" component={RegistrationScreen} />
        </Stack.Navigator>
    );
}