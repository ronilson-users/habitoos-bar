import * as React from 'react';

import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  Alert
} from 'react-native';

import axios from 'axios';


import { NavigationContainer } from '@react-navigation/native';


import AsyncStorage from '@react-native-async-storage/async-storage';


const SignIn = ({ navigation }) => {


  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const [userToken, setUserToken] = React.useState('');

  const [errorMessage, setErrorMessage] = React.useState('');
  const [successMessage, setSuccessMessage] = React.useState('');

  // Se o usuarios nao for crendenciados ele e direcionafo pra o cadastro
  const handleCadastrar = () => {
    navigation.navigate('SignUp');
  };

  // Funcao para realizar o login
  const handleSignIn = async () => {
    try {

      // Remover espaços em branco antes e depois do email
      const cleanedEmail = email.trim();

      // Verifica se os campos estao vazios
      if (!cleanedEmail || !password) {
        setErrorMessage('Preencha todos os campos.');
        return;
      }

      // localhost colocar no .env
      const response = await axios.post('http://localhost:4000/auth/login', {
        email: cleanedEmail,
        password
      });

      // Armazena as credenciais no AsyncStorage após um login bem-sucedido
      await AsyncStorage.setItem('userToken', response.data.token);


      console.log('Token armazenado:', response.data.token);

      // Navegue para a tela Home após o login bem-sucedido
      //Login API call Here
      Alert.alert('Welcome!', 'Login Successful! How are you today?')
      
      
      navigation.navigate('Home');

      //console.log('Resposta do login:', response.data);

    } catch (error) {
      console.error('Erro no login:', error);
    }
  };




  return (
    <View style={styles.container}>

      <View style={styles.formContainer}>

        <TextInput
          style={styles.input}
          placeholder="Digite seu Email"
          onChangeText={(text) => setEmail(text)}
          value={email}

        />

        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          secureTextEntry
          onChangeText={(text) => setPassword(text)}

          value={password}
        />

        <Button title="Entrar" onPress={handleSignIn} />
        {errorMessage !== '' && <Text style={styles.error}>{errorMessage}</Text>}
        {successMessage !== '' && <Text style={styles.success}>{successMessage}</Text>}



        <TouchableOpacity onPress={handleCadastrar}>
          <Text style={styles.cadastroLink}>Ainda não tem uma conta? Cadastre-se</Text>
        </TouchableOpacity>


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
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#fff',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    backgroundColor: '#fff',
    color: '#273747',
  },
  cadastroLink: {
    fontSize: 14,
    color: '#fff',
    margin: 15,
  },
  buttonContainer: {
    alignItems: 'center',
  },
  buttonLogin: {
    marginTop: 10,
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#373F47',
    borderRadius: 5,
    width: '90%',
  },
  textButton: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14
  },
});

export default SignIn;