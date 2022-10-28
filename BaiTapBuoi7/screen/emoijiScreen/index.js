import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

const datas = [
  require('../../assets/emoiji/image1.png'),
  require('../../assets/emoiji/image2.png'),
  require('../../assets/emoiji/image3.png'),
  require('../../assets/emoiji/image4.png'),
  require('../../assets/emoiji/image5.png'),
];
const EmojiApp = () => {
  const [emoji, setEmoji] = useState(datas[0]);
  const handleClick = val => {
    setEmoji(val);
  };
  return (
    <View>
      <View style={style.container}>
        <Text style={style.text}>Bạn đang cảm thấy như thế nào?</Text>
        <Image source={emoji} style={style.selectedImage} />
        <View style={style.imageList}>
          {datas.map((value, index) => (
            <TouchableOpacity onPress={() => handleClick(value)}>
              <Image style={style.image} source={value} />
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedImage: {
    width: 200,
    height: 200,
  },
  image: {
    width: 50,
    height: 50,
  },
  imageList: {
    flexDirection: 'row',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
  },
});
export default EmojiApp;
