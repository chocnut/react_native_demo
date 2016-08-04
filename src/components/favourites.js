import React, { Component } from 'react';
import { StyleSheet, View, NavigatorIOS } from 'react-native';
import FavouriteList from './favourite-list';

class Favourites extends Component {
  render() {

    return (
      <NavigatorIOS
         style={styles.container}
         initialRoute={{
         title: 'Favourites',
         component: FavouriteList
      }}/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default Favourites;
