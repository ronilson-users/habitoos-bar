import { useCallback } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import CriarMesa from
'../../screens/Apps/User/CriarMesa'

import SaveQrcode from
'../../screens/Apps/Mesa/SaveQrcode'

export default function HomeScreen(){
 

  return (
    <View style={styles.container}>
      
     
      
      <SaveQrcode />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
