import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  Button, 
  StyleSheet 
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';



import axios from 'axios';

const SignUp = ({ navigation }) => {
  
const [email, setEmail] = useState('');
const [cpf, setCPF] = useState('');
const [password, setPassword] = useState('');
const [errorMessage, setErrorMessage] = useState('');
const [successMessage, setSuccessMessage] = useState('');

const handleSignUp = async () => {
try {
console.log('Iniciando o cadastro');

// Remover espaços em branco antes e depois do email
const cleanedEmail = email.trim();

if (!cpf || !cleanedEmail || !password) {
setErrorMessage('Preencha todos os campos.');
return;
}

// Remove qualquer caractere não numérico do CPF
const cleanedCpf = cpf.replace(/\D/g, '');

if (cleanedCpf.length !== 11) {
setErrorMessage('O CPF deve conter 11 dígitos.');
return;
}
if (password.length < 7) {
setErrorMessage('A senha deve conter  no minimo 7 dígitos.');
return;
}

// verificar se o cpf e email ja estao cadastrados e informar ao usuário antes de iniciar o  insert

const response = await axios.post('http://localhost:4000/auth/registrar', {
cpf: cleanedCpf,
email: cleanedEmail,
password
});

if (response.data.token) {
// Salve o token no AsyncStorage
await AsyncStorage.setItem('token', response.data.token);
console.log('Token recebido e salvo:', response.data.token);
}

// imprimir no terminal os dados inseridos no momgodb
console.log('CPF:', cleanedCpf);
console.log('E-mail:', cleanedEmail);
console.log('Password:', password);

console.log('Resposta da API:', response.data);

// Lógica para lidar com a resposta (por exemplo, navegar para outra tela)
navigation.navigate('SignIn');
console.log('Resposta do cadastro:', response.data);
} catch (error) {

// Atualize a mensagem de erro com base no status da resposta
if (error.response) {
console.log(`Erro: ${error.response.status} - ${error.response.data.message}`);

setErrorMessage('');
setErrorMessage('O cpf ou o email ja estao cadastrado.');
} else if (error.request) {
console.log('Erro ao enviar requisição.', error);
} else {
console.log('Erro ao processar a requisição.');
}
} //trycat

}; //handleSignUp

return (
<View style={styles.container}>
  <View style={styles.formContainer}>
  <TextInput
  style={styles.input}
  placeholder="Digite Seu CPF"
  onChangeText={text => setCPF(text)}
  value={cpf}
  keyboardType="numeric"
  />

  <TextInput
  style={styles.input}
  placeholder="Digite Seu Email"
  onChangeText={text => setEmail(text)}
  value={email}
  />
  <TextInput
  style={styles.input}
  placeholder="Digite Sua Senha"
  secureTextEntry
  onChangeText={text => setPassword(text)}
  value={password}
  />

  <Button title="Cadastrar" onPress={handleSignUp} />
      {errorMessage !== '' && <Text style={styles.error}>{errorMessage}</Text>}
      {successMessage !== '' && <Text style={styles.success}>{successMessage}</Text>}
    </View>
    </View>
);
};

const styles = StyleSheet.create({
container: {
flex: 1,
padding: 20,
backgroundColor: '#273747', // Cor de fundo do contêiner
},
formContainer: {
flex: 1,
padding: 20,
top: 150,
},
input: {
borderWidth: 2,
borderColor: '#ccc',
borderRadius: 5,
padding: 10,
marginBottom: 15,
backgroundColor: '#fff',
},
error: {
color: 'red',
marginBottom: 10,
margin: 5,
borderRadius: 5,
},
success: {
color: 'green',
marginBottom: 10,
borderRadius: 5,
margin: 5,
},
});
export default SignUp;