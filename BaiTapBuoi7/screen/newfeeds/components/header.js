import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';

const NewFeedHeader = props => {
  return (
    <View style={Style.bar}>
      <Image source={require('../newfeeds/camera.png')} />
      <Text style={{fontSize: 18, color: 'black', fontWeight: '600'}}>
        {props.title}
      </Text>
      <Image source={require('../newfeeds/pen.png')} />
    </View>
  );
};
const Style = StyleSheet.create({
  bar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 15,
    paddingBottom: 15,
    borderBottomWidth: 2,
    borderBottomColor: '#f0f0f0',
  },
});
export default NewFeedHeader;
