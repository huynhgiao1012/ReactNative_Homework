import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import React from 'react';

const Avartar = props => {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View style={style.container}>
        {props.datas.map((val, index) => (
          <View style={style.container_item}>
            <Image style={style.container_item_image} source={val.image} />
            <Text style={{fontWeight: '700', color: 'black', fontSize: 14}}>
              {val.name}
            </Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};
const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  container_item: {
    marginRight: 10,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 10,
    width: 65,
    height: 120,
  },
  container_item_image: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
});
export default Avartar;
