import React from 'react'
import api from '../../services/api'
import {View, Image, TextInput} from 'react-native';

import logo from '../../assets/logo.png'
import styles from './styles'

export default function Login() {
  return (
    <View style={styles.container}>
      <Image source={logo} />

      <TextInput
        placeholder="Digite seu usuário no Github"
        style={styles.input}
      />
    </View>
  );
}
