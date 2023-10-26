import React, { useState } from 'react';
import { View, Text, TouchableOpacity,StyleSheet } from 'react-native';
import Draggable from 'react-native-draggable';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Importe o pacote correto

 import Comanda from './Comanda'
const MyDraggable = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (

	
    <View style={styles.conatiner}>
	<View>

	
	</View>
    
      <Draggable
        x={10} // posição inicial em X
        y={0} // posição inicial em Y
        renderSize={56}
        renderColor=""
        renderText="Arraste-me"
        isCircle
        shouldReverse
        onShortPressRelease={toggleVisibility}
      >

         
        <TouchableOpacity onPress={toggleVisibility}>
          <Ionicons name="file-tray-full-outline" size={25} color="#fcfcfc" />
          
          
        </TouchableOpacity>

        {isVisible && (
          <View>
           
            <Text>Item 1</Text>
            <Text>Item 2</Text>
            {/* Adicione mais itens conforme necessário */}
          </View>
        )}
      </Draggable>
    </View>
  );
};

const styles = StyleSheet.create({
	conatiner :{
		backgroundColor : 'red',
		borderColor : '#ccece'
	}
})
export default MyDraggable;