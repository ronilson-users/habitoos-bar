import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet,
Button  } from 'react-native';


const CustomButton = ({ onPress, title }) => {
  return (
    <View >
      <Button onPress={onPress} title={title} />
    </View>
  );
}




export default CustomButton;