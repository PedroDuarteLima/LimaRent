import React from 'react';
import { Text, View, Button, Linking, Image } from 'react-native';
import { css } from '../../assets/css/css';
import ExternalLink from '../../assets/components/ExternalLink';

export default function InfoCar({ navigation }) {
  return (
    <View>
      <Image source={require('../../assets/img/address1.png')} />
      <ExternalLink url="https://goo.gl/maps/QWcbESdYBYWzH6pGA"> Leve-me até ao Carro </ExternalLink>
      <View style={css.cage}>
        <View>
          <Image style={css.img_carWrap} source={require('../../assets/img/car1.jpg')} />
        </View>

        <View style={css.view_orient}>
          <View style={css.info_spreadView}>
            <Text style={css.info_spreadTextBold}>Nome: </Text>
            <Text style={css.info_spreadText}>Rolha</Text>
          </View>

          <View style={css.info_spreadView}>
            <Text style={css.info_spreadTextBold}>Localização: </Text>
            <Text style={css.info_spreadText}>Rua Pascoal de Melo</Text>
          </View>

          <View style={css.info_spreadView}>
            <Text style={css.info_spreadTextBold}>Bateria: </Text>
            <Text style={css.info_spreadText}>78%</Text>
          </View>

          <View style={css.info_spreadView}>
            <Text style={css.info_spreadTextBold}>Lugares: </Text>
            <Text style={css.info_spreadText}>2</Text>
          </View>

          <View style={css.info_spreadView}>
            <Text style={css.info_spreadTextBold}>Autonomia: </Text>
            <Text style={css.info_spreadText}>71km</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
