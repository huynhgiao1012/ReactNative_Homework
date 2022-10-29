import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

const NewfeedPost = props => {
  const [heart, setHeart] = useState(0);
  const handleClickHeart = () => {
    let c = heart + 1;
    setHeart(c);
  };
  return (
    <View style={style.postContainer}>
      {props.dataFeeds.map((val, index) => (
        <View key={index} style={style.postItem}>
          <View style={style.postHeader}>
            <Image source={val.image} style={style.postHeader_Image} />
            <View style={{paddingLeft: 10, paddingRight: 30}}>
              <Text>{val.title}</Text>
              <View style={style.postName_Time}>
                <Text>{val.name}</Text>
                <Text>{val.time}</Text>
              </View>
            </View>
            <Image source={require('../newfeeds/more.png')} />
          </View>
          <Text>{val.content}</Text>
          <View style={style.postFooter}>
            <TouchableOpacity onPress={handleClickHeart}>
              <Image
                style={style.interactIcon}
                source={require('../newfeeds/heart.png')}
              />
            </TouchableOpacity>
            <Text style={style.interactText}>{heart}</Text>
            <TouchableOpacity>
              <Image
                style={style.interactIcon}
                source={require('../newfeeds/comment.png')}
              />
            </TouchableOpacity>
            <Text style={style.interactText}>50</Text>
          </View>
        </View>
      ))}
    </View>
  );
};
const style = StyleSheet.create({
  postContainer: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 20,
  },
  postItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
    paddingTop: 10,
  },
  postHeader: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  postHeader_Image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  postName_Time: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  postFooter: {
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  interactIcon: {
    width: 25,
    height: 25,
    marginRight: 10,
  },
  interactText: {
    marginRight: 10,
    fontSize: 16,
    fontWeight: '400',
  },
});
export default NewfeedPost;
