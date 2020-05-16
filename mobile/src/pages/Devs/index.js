import React from 'react';
import io from 'socket.io-client'
import api from '../../services/api'
import { View, Image, Text, TouchableOpacity, Linking } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import logoImg from '../../assets/logo.png';
import styles from './styles';

export default function Devs() {


    render() {
        return (
            <View style={styles.container}>
                <Text>Devs</Text>
            </View>
        )
    }
}