import React, { useState, useEffect } from 'react';
import { Text, View, Button, StatusBar, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { css } from '../../assets/css/css';
import Slider from '../../assets/components/Slider';

export default function Entry({ navigation }) {
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
    <View style={css.background_Entry}>
      <Slider />
      <View style={css.round_btnRow}>
        <StatusBar hidden={true} />
        <TouchableOpacity style={css.round_btn} onPress={() => navigation.navigate('Frota')}>
          <Text style={css.round_btnText}>Frota</Text>
        </TouchableOpacity>

        <TouchableOpacity style={css.round_btn} onPress={() => navigation.navigate('Reservar')}>
          <Text style={css.round_btnText}>Reservar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={css.round_btn} onPress={() => navigation.navigate('Profile')}>
          <Text style={css.round_btnText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
