import React, {useState, useEffect} from 'react';
import { KeyboardAvoidingView, Platform, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'

import api from '../../services/api';
import logo from '../../assets/logo.png';
import styles from './styles';

export default Login = ({ navigation }) => {
  const [user, setUser] = useState('');

  async function handleLogin() {
    const res = await api.post('/devs', { username: user })
    const { _id } = res.data

    const storage = await AsyncStorage.setItem('@user', _id)

    navigation.navigate('Devs', { user: _id })
  }

  useEffect(() => {
    AsyncStorage.getItem('@user').then(user => {
      if (user) navigation.navigate('Devs', { user })
    })
  }, []);

  return (
    <KeyboardAvoidingView 
      behavior="padding"
      enabled={Platform.OS === 'ios'}
      style={styles.container}
    >
      <Image source={logo} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Digite seu usuário no Github"
        placeholderTextColor='#999'
        style={styles.input}
        value={user}
        onChangeText={setUser}
      />
      <TouchableOpacity 
        style={styles.button}
        onPress={handleLogin}
      >
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}
