import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React, {memo, useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {searchByCategory} from '../Screen/reduxToolkit/ReduxThunk';
const windowWidth = Dimensions.get('window').width;
const AppBar2 = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const search = newText => {
    setText(newText);
  };
  useEffect(() => {
    dispatch(searchByCategory(text));
  }, [text]);
  return (
    <View style={Style.appBar2}>
      <Text style={Style.title}>Find Yours Dream Shoes</Text>
      <View style={Style.appBar2_2}>
        <View style={Style.search}>
          <Image
            source={require('../Assets/Icon/search.png')}
            style={{marginLeft: 15, marginRight: 15}}
          />
          <TextInput
            style={Style.search_input}
            placeholder={'Search Shoes...'}
            inlineImageLeft={'adjust.png'}
            onSubmitEditing={value => search(value.nativeEvent.text)}
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
    width: windowWidth,
    padding: 15,
  },
  appBar2_2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    marginRight: 5,
    borderRadius: 12,
  },
  search_input: {
    borderWidth: 1,
    paddingLeft: 20,
    width: windowWidth / 2 + 40,
    borderColor: 'white',
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
