import React, { Component } from 'react';
import { StyleSheet, View, NavigatorIOS, Navigator, Text } from 'react-native';
import AssetList from './asset-list';
import Detail from './detail';

class Asset extends Component {

  renderScene(route, navigator) {
    const routeId = route.id;
    const asset = route.asset;
    if (routeId === 'Detail') {
     return (
       <Detail navigator={navigator} asset={asset} />
     )
   } else {
     return (
       <AssetList navigator={navigator} />
     )
   }
  }

  render() {
    if(this.props.os === 'ios') {
      return (
        <NavigatorIOS
             style={styles.container}
             initialRoute={{
         title: 'All Assets',
         component: AssetList
         }}/>
      );
    } else {
      return ( <Navigator
        initialRoute={{ title: 'All Assets', index: 0 }}
        renderScene={this.renderScene.bind(this)}
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

export default Asset;
