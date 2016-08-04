import React, { Component } from 'react';
import { Text, View, TabBarIOS, Platform } from 'react-native';
import Asset from './components/asset';
import Trip from './components/trip';
import Favourites from './components/favourites';
import ScrollableTabView, {DefaultTabBar, } from 'react-native-scrollable-tab-view';
import Icon from 'react-native-vector-icons/Ionicons';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'assets',
      os: ''
    };
  }

  componentWillMount() {
    this.setState({os: Platform.OS});
  }

  render() {
    if(this.state.os === 'ios') {
      return(
        <TabBarIOS selectedTab={this.state.selectedTab}>
          <Icon.TabBarItem
            selected={this.state.selectedTab === 'assets'}
            iconName="ios-cube"
            selectedIconName="ios-cube"
            title='All Assets'
            onPress={() => {
              this.setState({
                selectedTab: 'assets'
              });
            }}>
            <Asset os={this.state.os} />
          </Icon.TabBarItem>
          <Icon.TabBarItem
            selected={this.state.selectedTab === 'trip'}
            iconName='ios-car'
            selectedIconName='ios-car'
            title='In Trip'
            onPress={() => {
              this.setState({
                selectedTab: 'trip'
              });
            }}>
            <Trip os={this.state.os} />
          </Icon.TabBarItem>
          <Icon.TabBarItem
            selected={this.state.selectedTab === 'favourites'}
            iconName="ios-heart"
            selectedIconName="ios-heart"
            title='Favourites'
            onPress={() => {
              this.setState({
                selectedTab: 'favourites'
              });
            }}>
            <Favourites os={this.state.os} />
          </Icon.TabBarItem>
        </TabBarIOS>
      );
    } else {
      return (<ScrollableTabView style={{marginTop: 20, }}>
        <Asset tabLabel='All Assets' os={this.state.os}/>
        <Trip tabLabel='In Trip'  os={this.state.os} />
        <Favourites tabLabel='Favourites' os={this.state.os}/>
        </ScrollableTabView>
      );
    }
  }
}

export default Main;
