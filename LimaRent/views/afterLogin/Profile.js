import React, { useState, useEffect } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { css } from '../../assets/css/css';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Profile({ navigation }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function getUser() {
      let response = await AsyncStorage.getItem('userData');
      let json = JSON.parse(response);
      setUser(json.name);
    }
    getUser();
  }, []);

  return (
    <View>
      <Image source={{ uri: 'https://www.nicepng.com/png/detail/202-2024580_png-file-profile-icon-vector-png.png' }} style={css.profilePic} />
      <Text style={css.welcome}>Bem-vindo, {user}</Text>

      <TouchableOpacity style={css.profileMenuBtn} onPress={() => navigation.navigate('Documentos')}>
        <Text style={css.round_btnText}>Documentos</Text>
      </TouchableOpacity>

      <TouchableOpacity style={css.profileMenuBtn} onPress={() => navigation.navigate('Termos')}>
        <Text style={css.round_btnText}>Termos e Condições</Text>
      </TouchableOpacity>

      <TouchableOpacity style={css.profileMenuBtn} onPress={() => navigation.navigate('Politicas')}>
        <Text style={css.round_btnText}>Politicas de Privacidade </Text>
      </TouchableOpacity>
    </View>
  );
}

//documentos Termos e condições e Politicas
