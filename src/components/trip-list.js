import React, { Component } from 'react';
import { Image, StyleSheet, Text, View, ListView, TouchableHighlight } from 'react-native';
import { ASSETS_DATA } from '../api/assets';
import Detail from './detail';
import moment from 'moment';
import Circle from './circle';

class TripList extends Component {

  constructor() {
    super();
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      })
    };
  }

  componentDidMount() {
    let asset = ASSETS_DATA; // Object.assign({}, ASSETS_DATA);
    let newAsset = asset.filter( a => a.drivingStatus === 'inTrip');
    this.setState({
        dataSource: this.state.dataSource.cloneWithRows(newAsset)
    });
  }

  showDetail(asset) {
    this.props.navigator.push({
      title: asset.name,
      component: Detail,
      passProps: {asset}
    });
  }

  formatDateTime(time) {
    if(time.length === 0) {
      return moment.duration(moment().diff(moment().format())).humanize() + " ago";
    }
    return moment.duration(moment().diff(time)).humanize() + " ago";
  }

  renderBook(asset) {
    return (
      <TouchableHighlight onPress={() => this.showDetail(asset)}  underlayColor='#dddddd'>
        <View>
          <View style={styles.container}>
            <Circle status={asset.status} />
            <View style={styles.rightContainer}>
              <Text style={styles.title}>{asset.name}</Text>
              <Text style={styles.date}>
                { asset.status} at { asset.address } for {this.formatDateTime(asset.created_at)}
              </Text>
            </View>
          </View>
          <View style={styles.separator} />
        </View>
      </TouchableHighlight>
    );
  }

  render() {
    return (
      <ListView
         dataSource={this.state.dataSource}
         renderRow={this.renderBook.bind(this)}
         style={styles.listView}/>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#F5FCFF',
    padding: 10
  },
  thumbnail: {
    width: 53,
    height: 81,
    marginRight: 10
  },
  rightContainer: {
    flex: 1,
    paddingLeft: 20
  },
  title: {
    fontSize: 20,
    marginBottom: 8
  },
  date: {
    color: '#656565'
  },
  separator: {
    height: 1,
    backgroundColor: '#dddddd'
  }
});

export default TripList;
