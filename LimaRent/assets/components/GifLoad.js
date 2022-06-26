import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

const GifLoad = () => {
  return (
    <View style={Styles.container}>
      <Image style={{ width: '100%', height: '80%' }} source={{ uri: 'https://i.gifer.com/origin/a2/a2d129be9ce2caa59cc0903befde466f_w200.gif' }} />
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    margin: 25,
  },
});

export default GifLoad;
