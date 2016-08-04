import React, { Component } from 'react';
import { StyleSheet, View, NavigatorIOS } from 'react-native';
import AssetList from './asset-list';

class Asset extends Component {
  render() {
    return (
      <NavigatorIOS
           style={styles.container}
           initialRoute={{
       title: 'All Assets',
       component: AssetList
       }}/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default Asset;
