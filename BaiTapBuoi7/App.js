import {View, Text} from 'react-native';
import React from 'react';
import EmojiApp from './screen/emoijiScreen';
import NewFeeds from './screen/newfeeds';
export default function App() {
  return (
    <View>
      <NewFeeds />
      {/* <EmojiApp /> */}
    </View>
  );
}
