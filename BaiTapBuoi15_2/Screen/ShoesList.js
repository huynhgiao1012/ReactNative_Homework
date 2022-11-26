import {View} from 'react-native';
import React from 'react';
import {useDispatch} from 'react-redux';
import AppBar1 from '../Component/AppBar1';
import AppBar2 from '../Component/AppBar2';
import {getProduct} from './reduxToolkit/ReduxThunk';

export default function ShoesList() {
  const dispatch = useDispatch();
  return (
    <View style={{backgroundColor: '#ebeaef'}}>
      <AppBar1 />
      <AppBar2 />
      <TouchableOpacity onPress={() => dispatch(getProduct)}>
        <Image source={require('../Assets/Icon/search.png')} />
      </TouchableOpacity>
    </View>
  );
}
