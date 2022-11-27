import {
  View,
  FlatList,
  Text,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';
import React from 'react';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const ItemList = props => {
  const renderItem = ({item}) => {
    return (
      <View style={Style.item}>
        <Image
          style={Style.item_heart}
          source={require('../Assets/Icon/heart.png')}
        />
        <View style={Style.item_image}>
          <Image
            style={{width: '100%', height: '100%'}}
            source={{
              uri: `${item.image}`,
            }}
          />
        </View>
        <Text style={Style.item_name}>{item.name}</Text>
        <Text style={Style.item_price}>{item.price}</Text>
      </View>
    );
  };
  return (
    <FlatList
      data={props.product}
      style={Style.content}
      renderItem={renderItem}
      numColumns={2}
      keyExtractor={item => item.id.toString()}
    />
  );
};
const Style = StyleSheet.create({
  content: {
    display: 'flex',
    paddingLeft: 10,
    paddingRight: 10,
    height: windowHeight - 300,
    marginBottom: 20,
  },
  item: {
    padding: 15,
    backgroundColor: 'white',
    width: windowWidth / 2 - 20,
    borderRadius: 12,
    margin: 5,
  },
  item_heart: {
    backgroundColor: 'black',
    borderRadius: 50,
    borderColor: '#f0f0f0',
    padding: 10,
  },
  item_image: {
    width: '100%',
    height: 120,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item_name: {
    fontWeight: '700',
    fontSize: 20,
    color: 'black',
    paddingBottom: 10,
  },
  item_price: {
    fontWeight: '500',
    fontSize: 15,
    color: '#333333',
  },
});
export default ItemList;
