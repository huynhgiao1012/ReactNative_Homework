import {View, Text} from 'react-native';
import React from 'react';
import ListFriend from './screen/listFriend';
import datas from './screen/data';
export default function App() {
  return (
    <View>
      <ListFriend datas={datas} />
    </View>
  );
}
