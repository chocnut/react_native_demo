import React, { Component } from 'react';
import { StyleSheet, View, NavigatorIOS, Navigator, Text } from 'react-native';
import FavouriteList from './favourite-list';

class Favourites extends Component {
  render() {
    if(this.props.os === 'ios') {
      return (
        <NavigatorIOS
          style={styles.container}
          initialRoute={{
            title: 'Favourites',
            component: FavouriteList
          }}/>
        );
      } else {
        return ( <Navigator
          initialRoute={{ title: 'All Assets', index: 0 }}
          renderScene={(route, navigator) =>
            <FavouriteList />
          }
          style={styles.container}
        />)
      }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

  export default Favourites;
