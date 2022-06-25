import React from 'react';
import { Text, View, Image } from 'react-native';
import { css } from '../../assets/css/css';

export default function Frota({ navigation }) {
  return (
    <View>
      <View style={css.cage}>
        <View style={{ flexDirection: 'row' }}>
          <Image style={{ width: '30%', height: 300 }} source={require('../../assets/img/car1.jpg')} />

          <View style={{ margin: 10 }}>
            <Text>A</Text>
          </View>

          <View style={{ margin: 10 }}>
            <Text>B</Text>
          </View>

          <View style={{ margin: 10 }}>
            <Text>C</Text>
          </View>
        </View>
      </View>

      <View style={css.cage}>
        <View style={{ flexDirection: 'row' }}>
          <Image style={{ width: '30%', height: 300 }} source={require('../../assets/img/car2.jpg')} />

          <View style={{ margin: 10 }}>
            <Text>A</Text>
          </View>

          <View style={{ margin: 10 }}>
            <Text>B</Text>
          </View>

          <View style={{ margin: 10 }}>
            <Text>C</Text>
          </View>
        </View>
      </View>

      <View style={css.cage}>
        <View style={{ flexDirection: 'row' }}>
          <Image style={{ width: '30%', height: 300 }} source={require('../../assets/img/car3.jpg')} />

          <View style={{ margin: 10 }}>
            <Text>A</Text>
          </View>

          <View style={{ margin: 10 }}>
            <Text>B</Text>
          </View>

          <View style={{ margin: 10 }}>
            <Text>C</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
