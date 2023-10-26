import React from 'react';
import { View, Text } from 'react-native';
import * as Svg from 'react-native-svg';
import QRCode from 'react-native-qrcode-svg';

const DynamicQRCode = ({ name, date, time }) => {
  const qrCodeData = JSON.stringify({ name, date, time });

  return (
    <View>
      <Text>Nome: {name}</Text>
      <Text>Data: {date}</Text>
      <Text>Hora: {time}</Text>
      <QRCode value={qrCodeData} />
    </View>
  );
};
export default DynamicQRCode;