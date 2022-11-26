import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React, {memo} from 'react';
const AppBar1 = () => {
  return (
    <View style={Style.appBar}>
      <TouchableOpacity style={Style.arrow}>
        <Image source={require('../Assets/Icon/back_arrow.png')} />
      </TouchableOpacity>
      <Image
        style={Style.avatar}
        source={{
          uri: 'https://img.myloview.es/fotomurales/beautiful-woman-avatar-character-icon-400-225329726.jpg',
        }}
      />
    </View>
  );
};
const Style = StyleSheet.create({
  appBar: {
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 50,
  },
  arrow: {
    backgroundColor: 'white',
    padding: 8,
    borderRadius: 10,
    borderColor: '#f0f0f0',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 12,
    borderColor: '#f0f0f0',
  },
});
export default memo(AppBar1);
