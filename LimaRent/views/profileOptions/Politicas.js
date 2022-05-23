import React from 'react';
import { Text, View, ScrollView, Image } from 'react-native';
import { css } from '../../assets/css/css';

export default function Politicas({ navigation }) {
  return (
    <View>
      <Image source={require('../../assets/img/icon.png')} style={{ height: 100, width: 150, alignSelf: 'center', marginTop: 15 }} />

      <Text style={{ fontSize: 45, marginTop: 10, alignSelf: 'center' }}>Politicas de Privacidade </Text>
      <Text style={{ margin: 10 }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </Text>
      <Text style={{ fontSize: 35, marginTop: 10, alignSelf: 'center' }}>Sigilo de Documentos</Text>
      <Text style={{ margin: 10 }}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. </Text>
      <Text style={{ fontSize: 35, marginTop: 10, alignSelf: 'center' }}>Autenticação</Text>
      <Text style={{ margin: 10 }}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</Text>
    </View>
  );
}
