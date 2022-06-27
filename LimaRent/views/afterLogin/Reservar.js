import React from 'react';
import { Text, View, ViewBase } from 'react-native';
import { DebugInstructions } from 'react-native/Libraries/NewAppScreen';
import GifLoad from '../../assets/components/GifLoad';
import { UseCamera } from '../../assets/components/UseCamera';

export default function Reservar({ navigation }) {
  return (
    <View>
      <UseCamera />
    </View>
  );
}
