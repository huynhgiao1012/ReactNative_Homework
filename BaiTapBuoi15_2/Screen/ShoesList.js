import {View, TouchableOpacity, Image} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import AppBar1 from '../Component/AppBar1';
import AppBar2 from '../Component/AppBar2';
import ItemList from '../Component/ItemList';
import {getProduct} from './reduxToolkit/ReduxThunk';

export default function ShoesList() {
  useEffect(() => {
    dispatch(getProduct());
  }, []);
  const dispatch = useDispatch();
  const product = useSelector(state => state.reduxReducer.product);
  const searchList = useSelector(state => state.reduxReducer.searchList);
  return (
    <View style={{backgroundColor: '#ebeaef'}}>
      <AppBar1 />
      <AppBar2 />
      <ItemList product={searchList.length !== 0 ? searchList : product} />
    </View>
  );
}
