import React from 'react';
import { View, Image, ScrollView, Dimensions, Text, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');
const height = width * 0.6; //60%
const images = ['https://www.open.ac.uk/about/estates/sites/www.open.ac.uk.about.estates/files/images/Green%20EV%20car.jpg', 'https://eco4planet.com/blog/wp-content/uploads/renault-twizy-media-gallery-08.jpg', 'https://ev-database.org/img/auto/BMW_i3_94Ah/BMW_i3_94Ah-01@2x.jpg'];

export default class Slider extends React.Component {
  state = {
    active: 0,
  };

  change = ({ nativeEvent }) => {
    const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
    if (slide !== this.state.active) {
      this.setState({ active: slide });
    }
  };

  render() {
    return (
      <View style={style.container}>
        <ScrollView pagingEnabled horizontal onScroll={this.change} showsHorizontalScrollIndicator={false} style={style.scroll}>
          {images.map((image, index) => (
            <Image key={index} source={{ uri: image }} style={style.image} />
          ))}
        </ScrollView>
        <View style={style.pagination}>
          {images.map((i, k) => (
            <Text key={k} style={k == this.state.active ? style.pagingActiveText : style.pagingText}>
              ⬤
            </Text>
          ))}
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: { marginTop: 50, width, height },
  scroll: { width, height },
  image: { width, height, resizeMode: 'cover' },
  pagination: { flexDirection: 'row', position: 'absolute', bottom: 0, alignSelf: 'center' },
  pagingText: { fontSize: width / 30, color: '#888', margin: 3 },
  pagingActiveText: { fontSize: width / 30, color: '#30e210', margin: 3 },
});
