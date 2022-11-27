import {View} from 'react-native';
import React from 'react';
import ShoesList from './Screen/ShoesList';
import {store} from './store';
import {Provider} from 'react-redux';
export default function App() {
  return (
    <Provider store={store}>
      <View>
        <ShoesList />
      </View>
    </Provider>
  );
}
