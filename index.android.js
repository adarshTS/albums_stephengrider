import React from 'react';                                  //main program code is written here
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

const App = () => (
  <View style={{ flex: 1 }}>
    <Header headerText={'ALBUMS'} />
    <AlbumList />
    </View>
  );
AppRegistry.registerComponent('albums', () => App);
