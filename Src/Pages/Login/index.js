import React, {useState} from 'react';
import {Image, View, Text} from 'react-native';
import {Button, TextInput} from 'react-native-paper';

import Styles from './styles';

const Login = ({navigation}) => {
  const [credenciais, setCredenciais] = useState({
    email: ' ',
    senha: ' ',
  });

  return (
    <View style={Styles.bgDark}>
      <Image
        style={Styles.logo}
        source={require('../../Pages/assets/logo.png')}
      />
      <View>
        <TextInput
          mode="Flat"
          style={Styles.marginBottom}
          label="Email ou numero de telefone"
          value={credenciais.email}
          onChangeText={text => setCredenciais({...credenciais, email: text})}
        />
        <TextInput
          mode="Flat"
          label="Senha"
          //propriedade para campos do tipo senha
          secureTextEntry
          style={Styles.marginBottom}
          value={credenciais.senha}
          onChangeText={text => setCredenciais({...credenciais, senha: text})}
        />
        <Button
          mode="contained"
          style={Styles.marginBottom}
          onPress={() => {
            navigation.navigate('Home');
          }}>
          Entrar
        </Button>
        <Button
          style={Styles.marginBottom}
          onPress={() => console.log('pressed')}
          theme={{colors: {primary: '#fff'}}}>
          Recuperar Senha
        </Button>
        <Text style={Styles.textSmall}>
          O acesso está protegido pelo Google reCAPTCHA para garantir que você
          não é um robo. Saiba mais.
        </Text>
      </View>
    </View>
  );
};

export default Login;
