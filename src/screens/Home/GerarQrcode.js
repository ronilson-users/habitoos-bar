import React, { useState } from 'react';
import { Text, TextInput, View, Pressable, StyleSheet } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { useNavigation } from '@react-navigation/native';

export default function GerarQrcode({ onGenerateQRCode }) {
  const [QR, setQR] = useState('');
  const [input, setInput] = useState('');
  const [QRref, setQRref] = useState();
  const navigation = useNavigation();

  const generateQRCode = () => {
    // Gerarar data e hora e inserir no QR
    const dataHora = new Date().toISOString();
    setQR(`${input} - ${dataHora}`);

    // Chame a função de retorno para enviar dados
    if (onGenerateQRCode) {
      onGenerateQRCode(`${input} - ${dataHora}`);
    
      console.log(dataHora);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        <Text style={styles.icon}>QR</Text> Criar Mesa
      </Text>
      <View style={styles.boxQrcode}>
        <TextInput
          style={styles.input}
          cursorColor={'blueviolet'}
          selectionColor={'blueviolet'}
          onChangeText={setInput}
          placeholder='Mesa'
        />
        <Pressable onPress={generateQRCode}>
          <Text style={styles.button}>Criar</Text>
        </Pressable>
      </View>

      <View style={styles.qr}>
        <View>
          {QR && (
            <QRCode
              size={240}
              value={QR}
              getRef={setQRref}
              backgroundColor='#fff'
            />
          )}
        </View>
      </View>
    </View>
  );
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
  //borderColor: 'blueviolet',
  borderWidth: 1,
  borderRadius: 5
 },
 title: {
  fontSize: 28,
  fontWeight: 'bold',
  marginBottom: 20
 },
 icon: {
  color: 'blueviolet'
 },
 boxQrcode: {
  width: 300,
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'row',
  marginBottom: 30
 },
 input: {
  paddingVertical: 8,
  paddingHorizontal: 15,
  width: 175,
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
  justifyContent: 'center'
  // height: 250,
  // width: 250,
  // borderColor: 'gray',
  // borderWidth: 1,
  // borderRadius: 5,
 }
});
