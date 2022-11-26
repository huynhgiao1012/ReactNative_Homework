import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {memo} from 'react';
const AppBar2 = () => {
  return (
    <View style={Style.appBar2}>
      <Text style={Style.title}>Find Yours Dream Shoes</Text>
      <View style={Style.appBar2_2}>
        <View style={Style.search}>
          <Image
            source={require('../Assets/Icon/search.png')}
            style={{marginLeft: 15}}
          />
          <TextInput
            style={Style.search_input}
            placeholder={'Search Shoes...'}
            inlineImageLeft={'adjust.png'}
          />
        </View>
        <TouchableOpacity style={Style.button}>
          <Image source={require('../Assets/Icon/adjust.png')} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const Style = StyleSheet.create({
  appBar2: {
    padding: 20,
  },
  appBar2_2: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold',
    width: 200,
    marginBottom: 15,
  },
  search: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    marginRight: 10,
    borderRadius: 12,
  },
  search_input: {
    borderWidth: 1,
    paddingLeft: 20,
    width: 270,
    borderColor: '#f8f8f8',
    fontSize: 18,
    fontWeight: '500',
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
  },
  button: {
    backgroundColor: 'white',
    padding: 13,
    borderRadius: 12,
    borderColor: '#f8f8f8',
  },
});
export default memo(AppBar2);
