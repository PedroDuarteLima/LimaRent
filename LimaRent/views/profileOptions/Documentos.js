import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';

export default function Documentos({ navigation }) {
  return (
    <View>
      <Text style={{ fontSize: 30, marginTop: 10, alignSelf: 'center', fontWeight: 'bold' }}>Adicione aqui os seus documentos </Text>
      <Text style={{ fontSize: 20, marginTop: 10, alignSelf: 'center', fontWeight: 'bold' }}>Carta de Condução</Text>
      <TouchableOpacity onPress={() => navigation.navigate('AddDL')}>
        <Image source={require('../../assets/img/drivingCard.png')} style={{ height: 250, width: '90%', alignSelf: 'center', marginTop: 15 }} />
      </TouchableOpacity>
      <Text style={{ fontSize: 20, marginTop: 10, alignSelf: 'center', fontWeight: 'bold' }}>Cartão de Cidadão</Text>
      <TouchableOpacity onPress={() => navigation.navigate('AddID')}>
        <Image source={require('../../assets/img/idCard.png')} style={{ height: 250, width: '90%', alignSelf: 'center', marginTop: 15 }} />
      </TouchableOpacity>
    </View>
  );
}
