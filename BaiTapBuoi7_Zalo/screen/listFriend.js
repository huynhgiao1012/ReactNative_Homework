import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import Avartar from './components/Avartar';
import Suggest from './components/Suggest';

const ListFriend = props => {
  return (
    <View style={{padding: 10, height: '100%'}}>
      <View style={style.title}>
        <Image
          style={style.title_image}
          source={require('../assets/icon/time.png')}
        />
        <Text style={style.title_text}>Danh sách tìm kiếm gần đây</Text>
      </View>
      <Avartar datas={props.datas} />
      <View style={style.title}>
        <Image
          style={style.title_image}
          source={require('../assets/icon/users.png')}
        />
        <Text style={style.title_text}>Gợi ý kết bạn</Text>
      </View>
      <Suggest datas={props.datas} />
    </View>
  );
};
const style = StyleSheet.create({
  title: {
    flexDirection: 'row',
  },
  title_image: {
    marginRight: 10,
  },
  title_text: {
    color: 'black',
    fontSize: 16,
    fontWeight: '700',
  },
});
export default ListFriend;
