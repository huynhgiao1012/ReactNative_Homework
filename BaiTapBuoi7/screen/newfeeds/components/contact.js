import {View, Image, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
const Contact = props => {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View style={style.imageList}>
        {props.avartar.map((val, index) => (
          <View key={index} style={style.imageList_item}>
            <Image style={style.image} source={val.image} />
            <Text>{val.name}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};
const style = StyleSheet.create({
  imageList: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#f0f0f0',
  },
  imageList_item: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 40,
  },
});
export default Contact;
