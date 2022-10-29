import {View, Text, ScrollView, Image, StyleSheet} from 'react-native';
import React from 'react';

const Suggest = props => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {props.datas.map((val, index) => (
        <View key={index} style={style.container}>
          <View style={style.container_left}>
            <Image source={val.image} style={style.container_left_image} />
            <View>
              <Text style={{fontWeight: '700', color: 'black', fontSize: 16}}>
                {val.name}
              </Text>
              <Text style={{color: 'black'}}>15 bạn chung</Text>
            </View>
          </View>
          <View style={style.container_right}>
            <Text style={{color: 'black'}}>Kết bạn</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};
const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#cccccc',
    borderRadius: 10,
  },
  container_left: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container_left_image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 15,
  },
  container_right: {
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#ccccff',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#c5c5c5',
  },
});
export default Suggest;
