import {View, ScrollView} from 'react-native';
import React from 'react';
import NewFeedHeader from './components/header';
import datas from './datas/nfData';
import Contact from './components/contact';
import NewfeedPost from './components/post';
const NewFeeds = () => {
  return (
    <View style={{height: '100%'}}>
      <NewFeedHeader title="Newfeeds" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Contact avartar={datas.dataAvatar} />
        <NewfeedPost dataFeeds={datas.dataFeeds} />
      </ScrollView>
    </View>
  );
};
export default NewFeeds;
