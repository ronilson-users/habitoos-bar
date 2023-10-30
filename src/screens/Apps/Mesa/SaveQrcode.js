/**
 *  @tester
 *  @format
 */

import {
 Pressable,
 StyleSheet,
 Text,
 TextInput,
 View,
 Image,
 Linking
} from 'react-native';
import * as FileSystem from 'expo-file-system';
import * as MediaLibrary from 'expo-media-library';
import Toast from 'react-native-root-toast';
import QRCode from 'react-native-qrcode-svg';
import { useState, useEffect } from 'react';

export default function SaveQrcode() {
 const [QR, setQR] = useState('');
 const [input, setInput] = useState('');
 const [QRref, setQRref] = useState();
 const [hasPermissions, setHasPermissions] =
  useState(false);

 const generateQRCode = () => {
  setQR(input);
 };

 useEffect(() => {
  (async () => {
   setHasPermissions(
    (await MediaLibrary.requestPermissionsAsync())
     .granted
   );
  })();
 }, []);
 // comente aqui
 const saveQRCode = () => {
  if (!hasPermissions || !QRref) return;

  QRref.toDataURL(async (data) => {
   const QRCodeImg =
    FileSystem.documentDirectory + 'QRCode.png';
   await FileSystem.writeAsStringAsync(
    QRCodeImg,
    data,
    { encoding: FileSystem.EncodingType.Base64 }
   );
   MediaLibrary.saveToLibraryAsync(QRCodeImg)
    .then(() =>
     Toast.show(
      'QR code esta Salvo na Galeria',
      Toast.durations.LONG
     )
    )
    .catch(console.error);
  });
 };

 <View style={styles.container}>
  <Text style={styles.title}>
   <Text style={styles.icon}>QR</Text> Code
   Generator
  </Text>
  <View style={styles.field}>
   <TextInput
    style={styles.input}
    cursorColor={'blueviolet'}
    selectionColor={'blueviolet'}
    onChangeText={setInput}
    placeholder=' Mesa'
   />
   <Pressable onPress={generateQRCode}>
    <Text style={styles.button}>Generate</Text>
   </Pressable>
  </View>

  <View style={styles.qr}>
   <Pressable onPress={saveQRCode}>
    {QR && (
     <QRCode
      size={240}
      value={QR}
      getRef={setQRref}
      backgroundColor='#fff'
     />
    )}
   </Pressable>
  </View>
  {QR && (
   <Text style={styles.instraction}>
    Click The{' '}
    <Text style={styles.instraicon}>QR</Text> Code
    to save it
   </Text>
  )}
  <View style={styles.logoHolder}>
   <Pressable
    onPress={() => {
     Linking.openURL('https://habitoos.com.br/');
    }}>
    <Image
     style={styles.logo}
     source={require('../../../assets/image/avatar.png')}
    />
   </Pressable>
  </View>
 </View>;
}

const styles = StyleSheet.create({
 container: {
  position: 'relative',
  flex: 1,
  paddingHorizontal: 40,
  paddingVertical: 40,
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'flex-start',
  borderColor: 'blueviolet',
  borderWidth: 1
 },

 title: {
  fontSize: 28,
  fontWeight: 'bold',
  marginBottom: 20
 },

 icon: {
  color: 'blueviolet'
 },

 field: {
  width: 400,
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'row',
  marginBottom: 30
 },

 input: {
  paddingVertical: 8,
  paddingHorizontal: 15,
  width: 240,
  borderWidth: 1.5,
  marginRight: 10,
  borderRadius: 5,
  borderColor: 'gray'
 },

 button: {
  padding: 12,
  borderRadius: 5,
  color: 'white',
  backgroundColor: 'blueviolet'
 },

 qr: {
  alignItems: 'center',
  justifyContent: 'center',
  height: 250,
  width: 250,
  borderColor: 'gray',
  borderWidth: 1,
  borderRadius: 5
 },

 instraction: {
  marginTop: 40,
  color: '#adadad'
 },

 instraicon: {
  color: '#bf88f3'
 },

 logoHolder: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'flex-end',
  position: 'relative',
  borderColor: 'blueviolet',
  borderWidth: 1
 },

 logo: {
  height: 60,
  width: 60,
  opacity: 0.3
 }
});
