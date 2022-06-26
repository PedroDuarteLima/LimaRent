import React from 'react';
import { TouchableOpacity, StyleSheet, Text, Linking } from 'react-native';

const ExternalLink = props => {
  const { url, children, style = {} } = props;

  const onPress = () =>
    Linking.canOpenURL(url).then(() => {
      Linking.openURL(url);
    });

  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={[styles.text, style]}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: 'center',
    backgroundColor: '#30e210',
    width: '100%',
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default ExternalLink;
