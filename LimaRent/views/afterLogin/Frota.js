import React from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { css } from '../../assets/css/css';

export default function Frota({ navigation }) {
  return (
    <ScrollView style={{ height: '100%' }}>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('InfoCar')}>
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
        </TouchableOpacity>

        <View style={css.cage_un}>
          <View>
            <Image style={css.img_carWrap} source={require('../../assets/img/car2.jpg')} />
          </View>

          <View style={css.view_orient}>
            <View style={css.info_spreadView}>
              <Text style={css.info_spreadTextBold}>Nome: </Text>
              <Text style={css.info_spreadText}>Jarvas</Text>
            </View>

            <View style={css.info_spreadView}>
              <Text style={css.info_spreadTextBold}>Localização: </Text>
              <Text style={css.info_spreadText}>Rua Correia Teles</Text>
            </View>

            <View style={css.info_spreadView}>
              <Text style={css.info_spreadTextBold}>Bateria: </Text>
              <Text style={css.info_spreadText}>97%</Text>
            </View>

            <View style={css.info_spreadView}>
              <Text style={css.info_spreadTextBold}>Lugares: </Text>
              <Text style={css.info_spreadText}>2</Text>
            </View>

            <View style={css.info_spreadView}>
              <Text style={css.info_spreadTextBold}>Autonomia: </Text>
              <Text style={css.info_spreadText}>95km</Text>
            </View>
          </View>
        </View>

        <View style={css.cage_un}>
          <View>
            <Image style={css.img_carWrap} source={require('../../assets/img/car3.jpg')} />
          </View>

          <View style={css.view_orient}>
            <View style={css.info_spreadView}>
              <Text style={css.info_spreadTextBold}>Nome: </Text>
              <Text style={css.info_spreadText}>Marco</Text>
            </View>

            <View style={css.info_spreadView}>
              <Text style={css.info_spreadTextBold}>Localização: </Text>
              <Text style={css.info_spreadText}>Rua da Alfândega</Text>
            </View>

            <View style={css.info_spreadView}>
              <Text style={css.info_spreadTextBold}>Bateria: </Text>
              <Text style={css.info_spreadText}>93%</Text>
            </View>

            <View style={css.info_spreadView}>
              <Text style={css.info_spreadTextBold}>Lugares: </Text>
              <Text style={css.info_spreadText}>4</Text>
            </View>

            <View style={css.info_spreadView}>
              <Text style={css.info_spreadTextBold}>Autonomia: </Text>
              <Text style={css.info_spreadText}>105km</Text>
            </View>
          </View>
        </View>

        <View style={css.cage}>
          <View>
            <Image style={css.img_carWrap} source={require('../../assets/img/car4.jpg')} />
          </View>

          <View style={css.view_orient}>
            <View style={css.info_spreadView}>
              <Text style={css.info_spreadTextBold}>Nome: </Text>
              <Text style={css.info_spreadText}>Borges</Text>
            </View>

            <View style={css.info_spreadView}>
              <Text style={css.info_spreadTextBold}>Localização: </Text>
              <Text style={css.info_spreadText}>Rua João Chagas</Text>
            </View>

            <View style={css.info_spreadView}>
              <Text style={css.info_spreadTextBold}>Bateria: </Text>
              <Text style={css.info_spreadText}>23%</Text>
            </View>

            <View style={css.info_spreadView}>
              <Text style={css.info_spreadTextBold}>Lugares: </Text>
              <Text style={css.info_spreadText}>4</Text>
            </View>

            <View style={css.info_spreadView}>
              <Text style={css.info_spreadTextBold}>Autonomia: </Text>
              <Text style={css.info_spreadText}>71km</Text>
            </View>
          </View>
        </View>

        <View style={css.cage}>
          <View>
            <Image style={css.img_carWrap} source={require('../../assets/img/car5.jpg')} />
          </View>

          <View style={css.view_orient}>
            <View style={css.info_spreadView}>
              <Text style={css.info_spreadTextBold}>Nome: </Text>
              <Text style={css.info_spreadText}>Mário</Text>
            </View>

            <View style={css.info_spreadView}>
              <Text style={css.info_spreadTextBold}>Localização: </Text>
              <Text style={css.info_spreadText}>Praça de Bilene</Text>
            </View>

            <View style={css.info_spreadView}>
              <Text style={css.info_spreadTextBold}>Bateria: </Text>
              <Text style={css.info_spreadText}>99%</Text>
            </View>

            <View style={css.info_spreadView}>
              <Text style={css.info_spreadTextBold}>Lugares: </Text>
              <Text style={css.info_spreadText}>2</Text>
            </View>

            <View style={css.info_spreadView}>
              <Text style={css.info_spreadTextBold}>Autonomia: </Text>
              <Text style={css.info_spreadText}>104km</Text>
            </View>
          </View>
        </View>

        <View style={css.cage_un}>
          <View>
            <Image style={css.img_carWrap} source={require('../../assets/img/car6.jpg')} />
          </View>

          <View style={css.view_orient}>
            <View style={css.info_spreadView}>
              <Text style={css.info_spreadTextBold}>Nome: </Text>
              <Text style={css.info_spreadText}>Prego</Text>
            </View>

            <View style={css.info_spreadView}>
              <Text style={css.info_spreadTextBold}>Localização: </Text>
              <Text style={css.info_spreadText}>Rua Isidoro Viana</Text>
            </View>

            <View style={css.info_spreadView}>
              <Text style={css.info_spreadTextBold}>Bateria: </Text>
              <Text style={css.info_spreadText}>10%</Text>
            </View>

            <View style={css.info_spreadView}>
              <Text style={css.info_spreadTextBold}>Lugares: </Text>
              <Text style={css.info_spreadText}>2</Text>
            </View>

            <View style={css.info_spreadView}>
              <Text style={css.info_spreadTextBold}>Autonomia: </Text>
              <Text style={css.info_spreadText}>26km</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
