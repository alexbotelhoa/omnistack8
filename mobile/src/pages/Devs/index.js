import React, { useEffect, useState } from 'react'
import io from 'socket.io-client'
import { 
  SafeAreaView,
  View, 
  Image, 
  Text, 
  TouchableOpacity
} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import { useNavigation } from '@react-navigation/native'

import styles from './styles'
import api from '../../services/api'

import logo from '../../assets/logo.png'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import itsamatch from '../../assets/itsamatch.png'

export default Devs = ({ route }) => {
  const id = route.params?.user ?? ''
  const navigation = useNavigation()
  const [devs, setDevs] = useState([])
  const [loading, setLoading] = useState(false)
  const [matchDev, setMatchDev] = useState(null)

  async function loadDevs() {
    if (loading) return

    setLoading(true)

    const res = await api.get('/devs', {
      headers: {
        user: id
      }
    })

    setDevs(res.data)

    setLoading(false)
  }

  async function handleLike() {
    const [dev, ...rest] = devs

    await api.post(`/devs/${dev._id}/likes`, null, {
      headers: { user: id },
    })

    setDevs(rest)
  }

  async function handleDislike() {
    const [dev, ...rest] = devs

    await api.post(`/devs/${dev._id}/dislikes`, null, {
      headers: { user: id },
    })

    setDevs(rest)
  }

  async function handleLogout() {
    await AsyncStorage.clear()
    navigation.navigate('Login')
  }

  useEffect(() => {
    const socket = io('http://10.0.2.2:3333', {
      query: { user: id }
    })

    socket.on('match', dev => {
      setMatchDev(dev)
    })
  }, [id])

  useEffect(() => {
    loadDevs()
  }, [id])

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={handleLogout}>
        <Image style={styles.logo} source={logo} />
      </TouchableOpacity>

      <View style={styles.cardsContainer}>
        { devs.length === 0
          ? <Text style={styles.empty}>Acabou :(</Text>
          : (
            devs.map((dev, index) => (
              <View key={dev._id} style={[styles.card, { zIndex: devs.length - index }]}>
                <Image style={styles.avatar} source={{ uri: dev.avatar }} />
                <View style={styles.footer}>
                  <Text style={styles.name}>{dev.name}</Text>
                  <Text style={styles.bio} numberOfLines={3}>{dev.bio}</Text>
                </View>
              </View>
            ))
          )
        }
      </View>

      { devs.length > 0 && (
        <View style={[styles.buttonsContainer, { zIndex: 0 }]}>
          <TouchableOpacity style={styles.button} onPress={handleDislike}>
            <Image source={dislike} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleLike}>
            <Image source={like} />
          </TouchableOpacity>
        </View>
      ) }

      { matchDev && (
        <View style={[styles.matchContainer, { zIndex: devs.length }]}>
          <Image style={styles.matchImage} source={itsamatch} />
          <Image style={styles.matchAvatar} source={{ uri: matchDev.avatar }} />

          <Text style={styles.matchName}>{matchDev.name}</Text>
          <Text style={styles.matchBio}>{matchDev.bio}</Text>

          <TouchableOpacity onPress={() => setMatchDev(null)}>
            <Text style={styles.closeMatch}>FECHAR</Text>
          </TouchableOpacity>
        </View>
      ) } 
 
    </SafeAreaView>
  );
};
