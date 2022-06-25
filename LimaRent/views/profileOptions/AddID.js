import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform, TouchableOpacity, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { css } from '../../assets/css/css';

export default function AddID({ navigation }) {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Adicione aqui o seu cartão de cidadão" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={{ width: '90%', height: 250 }} />}

      <TouchableOpacity style={css.profileMenuBtn} onPress={() => navigation.navigate('Documentos')}>
        <Text style={css.round_btnText}>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
}
