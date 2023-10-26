import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet,
ScrollView, Button, Alert} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import QRCode from 'react-native-qrcode-svg';

import CustomButton from '../../components/Button';

const AbrirMesa = () => {
	const navigation = useNavigation();

	const [inputText, setInputText] = useState('');

	const [qrData, setQrData] = useState('');

	const [qrDataObj, setQrDataObj] = useState(null);

	const [pedidosPorMesa, setPedidosPorMesa] = useState({});

	const [mesasCriadas, setMesasCriadas] = useState([]);


	const currentDate = new Date().toLocaleDateString();
	const currentTime = new Date().toLocaleTimeString();

	// cpf e garcon sao o Usuario logodo 


	const handleCriaMesaQr = () => {
		const newQrDataObj = {
			numeroMesa: inputText,
			garcon: 'John Doe',
			cpf: 30744171881,
			currentDate,
			currentTime,
			//usuarios: [],
			listaComanda: [],
			avaliacao: null,
		};

		setQrData(JSON.stringify(newQrDataObj));
		setQrDataObj(newQrDataObj); 
		
		// Adicione a nova mesa ao histórico de mesas criadas
		setMesasCriadas((prevMesas) => [...prevMesas, newQrDataObj]);

		console.log('Mesa created:', newQrDataObj);
	};

	const handleNavegarPedidoMesa = (mesa) => {

		navigation.navigate('PedidosMesaScreen', { mesa });
	};
const handleExluirMesa =(mesa)=>{
	alert('Deseja Excluir a Mesa');

}
	
	const VisualizarMesas = () => {
		return (

			// ScrollView praca
			<ScrollView horizontal
				contentContainerStyle={styles.mesaPraca}>

				{mesasCriadas.reverse().map((mesa, index) => (
					<View style={styles.mesaCard} key={index}>
						<Text style={styles.title}>Mesa: {mesa.numeroMesa}</Text>
						<Text style={styles.title}>Garçom: {mesa.garcon}</Text>
						<View style={styles.mesaButton}>
							<CustomButton
								title="Ver Pedidos"
								onPress={() => handleNavegarPedidoMesa(mesa)}
							/>
							<CustomButton
								title="Excluir Mesa"
								onPress={() => handleExluirMesa(mesa)}
							/>
							
						</View>

					</View>
				))}
			</ScrollView>
		);
	};

	return (
		<View style={styles.container}>
			<View style={styles.containerQrcode}>
				<Text style={styles.title}>Insira o número da mesa</Text>
				{/*verificar tempo mesa renovar praca */}
				<QRCode
					value={qrData || 'NA'}
					size={250}
					color="black"
					backgroundColor="white"
					logoSize={20}
					logoMargin={5}
					logoBorderRadius={15}
					logoBackgroundColor="yellow"
				/>

			</View>
			<View style={styles.mesaQrcode}>
				<TextInput
					style={styles.textInput}
					onChangeText={(inputText) =>
						setInputText(inputText.replace(/[^0-9]/g, '').slice(0, 2))
					}
					value={inputText}
					keyboardType="numeric"
					maxLength={2}
					placeholder="Mesa"
				/>
				<View style={styles.mesaButton}>
					<CustomButton onPress={handleCriaMesaQr} title="Abrir uma Mesa" />
				</View>
			</View>

			<View>
				<VisualizarMesas />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginTop: 250,
		alignItems: 'center',
		flex: 1,
		textAlign: 'center',
		justifyContent: 'center',
	},
	containerQrcode: {
		backgroundColor: '#fff',
		padding: 15,
		alignItems: 'center'
		// Estilos para o contêiner do QRCode
	},
	title: {
		fontSize: 18,
		fontWeight: 'bold',
		color: '#cecece',
		margin: 5
	},
	textInput: {
		backgroundColor: '#fff',
		fontWeight: 'bold',
		textAlign: 'center',
		borderRadius: 5,
		borderWidth: 1,
		padding: 2,
		fontSize: 24,
	},
	mesaButton: {
	
		flexDirection : 'row'
		
	},
	
	
	mesaPraca: {
	
		margin: 5
		// Estilos para o ScrollView horizontal
	},
	mesaCard: {
		
		padding: 5,
		margin : 5,
		height: 150,
		width: 250,
		borderWidth: 1,
		borderRadius : 5,
		borderColor : '#cecece'
		// Estilos para o cartão de mesa
	},
});

export default AbrirMesa;