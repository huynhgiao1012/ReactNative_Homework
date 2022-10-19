import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

export default function HomeworkDay5() {
  return (
    <View style={Style.container}>
      <Text
        style={[
          Style.text,
          {backgroundColor: '#C9C9FF', flex: 2, marginTop: 20},
        ]}>
        Purple: #C9C9FF
      </Text>
      <Text style={[Style.text, {backgroundColor: '#3D85C6', flex: 2}]}>
        Blue: #3D85C6
      </Text>
      <Text style={[Style.text, {backgroundColor: '#96CC96', flex: 2}]}>
        Green: #96CC96
      </Text>
      <Text style={[Style.text, {backgroundColor: '#F4B940', flex: 2}]}>
        Yellow: #F4B940
      </Text>
    </View>
  );
}

const Style = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    paddingRight: 20,
    paddingLeft: 20,
  },
  text: {
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
    color: '#333333',
    borderRadius: 10,
    marginBottom: 20,
  },
});
