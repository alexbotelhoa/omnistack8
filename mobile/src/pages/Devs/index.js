import React from 'react';
import io from 'socket.io-client';
import api from '../../services/api';
import {SafeAreaView, View, Image, Text, TouchableOpacity, Linking} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';

import logo from '../../assets/logo.png';
import styles from './styles';

export default Devs = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={logo} />

      <View style={styles.cardContainer}>
        
      </View>
    </SafeAreaView>
  );
};
