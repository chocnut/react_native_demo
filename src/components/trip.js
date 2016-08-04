import React, { Component } from 'react';
import { StyleSheet, View, NavigatorIOS, Navigator, Text } from 'react-native';
import TripList from './trip-list';

class Trip extends Component {
  render() {
    if(this.props.os === 'ios') {
      return (
        <NavigatorIOS
          style={styles.container}
          initialRoute={{
            title: 'In Trip',
            component: TripList
          }}/>
        );
      } else {
        return ( <Navigator
          initialRoute={{ title: 'All Assets', index: 0 }}
          renderScene={(route, navigator) =>
            <TripList />
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

  export default Trip;
