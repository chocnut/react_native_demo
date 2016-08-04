import React, { Component } from 'react';
import { TabBarIOS } from 'react-native';
import Asset from './components/asset';
import Trip from './components/trip';
import Favourites from './components/favourites';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'assets'
    };
  }

  render() {
    return (
      <TabBarIOS selectedTab={this.state.selectedTab}>
        <TabBarIOS.Item
          selected={this.state.selectedTab === 'assets'}
          icon={{uri:'assets'}}
          title='All Assets'
          onPress={() => {
            this.setState({
              selectedTab: 'assets'
            });
          }}>
          <Asset />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          selected={this.state.selectedTab === 'trip'}
          icon={{uri:'trip'}}
          title='In Trip'
          onPress={() => {
            this.setState({
              selectedTab: 'trip'
            });
          }}>
          <Trip />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          selected={this.state.selectedTab === 'favourites'}
          icon={{uri:'favourites'}}
          title='Favourites'
          onPress={() => {
            this.setState({
              selectedTab: 'favourites'
            });
          }}>
          <Favourites />
        </TabBarIOS.Item>
      </TabBarIOS>
    )
  }
}
export default Main;
