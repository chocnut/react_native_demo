import React, { Component } from 'react';
import { StyleSheet, View, NavigatorIOS } from 'react-native';
import TripList from './trip-list';

class Trip extends Component {
  render() {
    return (
      <NavigatorIOS
           style={styles.container}
           initialRoute={{
       title: 'In Trip',
       component: TripList
       }}/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default Trip;
