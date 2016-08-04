import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

class Circle extends Component {
  render() {
    let status = styles.red;
    if(this.props.status.indexOf('Trip') > -1) {
      status = styles.green;
    } else if(this.props.status.indexOf('fav') > -1) {
      status = styles.gold;
    }

    return (
      <View style={status} />
    );
  }
}


const styles = StyleSheet.create({
  red: {
    width: 25,
    height: 25,
    borderRadius: 100/2,
    backgroundColor: 'red'
  },
  green: {
    width: 25,
    height: 25,
    borderRadius: 100/2,
    backgroundColor: 'green'
  },
  gold: {
    width: 25,
    height: 25,
    borderRadius: 100/2,
    backgroundColor: '#FFD700'
  }
});

export default Circle;
