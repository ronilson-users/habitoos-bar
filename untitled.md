<figure> 
  <img src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/zmtdzk3zfsdvafrdc7wn.png" alt="Icone cartum de uma pessoa" />

  <figcaption>C# e Código, do Twitter</figcaption>
</figure>

Ser dev

<a href="https://md-poll.vercel.app/polls/7a9c4157-49e6-4264-bf27-d98b0bd4ebe2/vote?option=0&close" target="_blank">
  <img src="https://md-poll.vercel.app/api/polls/7a9c4157-49e6-4264-bf27-d98b0bd4ebe2/options/0/img" alt="Sim"/>
</a>
<br/>
<a href="https://md-poll.vercel.app/polls/7a9c4157-49e6-4264-bf27-d98b0bd4ebe2/vote?option=1&close" target="_blank">
  <img src="https://md-poll.vercel.app/api/polls/7a9c4157-49e6-4264-bf27-d98b0bd4ebe2/options/1/img" alt="Nao"/>
</a>
<br/>
<small>Click on the option you want to vote.</small>


import React, { useState } from "react";
import {
 View,
 Text,
 TextInput,
 Button,
 StyleSheet,
 
 Image
} from "react-native";
import QRCode from "react-native-qrcode-svg";

const AbrirMesa = () => {
 const [inputText, setInputText] = useState("");
 const [qrData, setQrData] = useState("");
 const [mesasCriadas, setMesasCriadas] = useState([]);

 const currentDate = new Date().toLocaleDateString();
 const currentTime = new Date().toLocaleTimeString();

 const handleCriarMesa = () => {
  const qrDataObj = {
   mesa: inputText,
   nome: "John Doe",
   cpf: 30744171881,
   currentDate,
   currentTime
  };

  setQrData(JSON.stringify(qrDataObj));
  setMesasCriadas(prevMesas => [...prevMesas, qrDataObj]);
  console.log(qrDataObj);
 };
 const handleVerDetalhes = mesa => {
  // Lógica para exibir detalhes da mesa
  console.log("Detalhes da mesa:", mesa);
 };

 return (
  <View style={styles.container}>
   <View style={styles.x}>
   <Text>Ronilson</Text>
    <QRCode
     value={qrData || "NA"}
     size={250}
     color="black"
     backgroundColor="white"
     logoSize={20}
     logoMargin={5}
     logoBorderRadius={15}
     logoBackgroundColor="yellow"
    />
   </View>
   <View style={styles.x}>
    <Text>Ronilson</Text>
    
   </View>
   <View style={styles.x}>
    <Text>Ronilson</Text>
   </View>
  </View>
 );
};
const styles = StyleSheet.create({
 container: {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#273747",
  padding: 10
 },
 x:{
 flex : 1,
  justifyContent: "center",
  alignItems: "center",
  width: 100,
  heigth: 100,
  borderColor : '#cecece',
  borderWidth :1 ,
  flexDirection: "row",
 }
 
});

export default AbrirMesa;

textInput: {
		// Estilos para a entrada de texto
		backgroundColor: '#fff',
		fontWeight: 'bold',
		textAlign: 'center',
		borderRadius: 5,
		borderWidth: 1,

		padding: 2,
		fontSize: 24,
},
mesaButton :{
	width: '90%'
},