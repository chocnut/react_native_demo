import React, { Component } from 'react';
import { StyleSheet, View, Text, MapView } from 'react-native';

class Detail extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MapView style={styles.map}
          annotations={[{
           latitude: this.props.asset.latitude,
           longitude: this.props.asset.longitude
          }]}
          region={{
           latitude: this.props.asset.latitude,
           longitude: this.props.asset.longitude
          }}>
        </MapView>
        <View style={styles.textWrapper}>
          <View style={styles.details}>
            <View style={styles.label}>
              <Text>Speed</Text>
            </View>
            <View style={styles.text}>
              <Text>{this.props.asset.speed} km/h</Text>
            </View>
          </View>
          <View style={styles.separator} />

          <View style={styles.details}>
            <View style={styles.label}>
              <Text>Battery Voltage</Text>
            </View>
            <View style={styles.text}>
              <Text>{this.props.asset.batteryVoltage} V</Text>
            </View>
          </View>
          <View style={styles.separator} />

          <View style={styles.details}>
            <View style={styles.label}>
              <Text>External Voltage</Text>
            </View>
            <View style={styles.text}>
              <Text>{this.props.asset.externalVoltage} V</Text>
            </View>
          </View>
          <View style={styles.separator} />

          <View style={styles.details}>
            <View style={styles.label}>
              <Text>GSM Signal Strength</Text>
            </View>
            <View style={styles.text}>
              <Text>{this.props.asset.gsmSignal}</Text>
            </View>
          </View>
          <View style={styles.separator} />

          <View style={styles.details}>
            <View style={styles.label}>
              <Text>Temperature</Text>
            </View>
            <View style={styles.text}>
              <Text>{this.props.asset.temperature}</Text>
            </View>
          </View>
          <View style={styles.separator} />

          <View style={styles.details}>
            <View style={styles.label}>
              <Text>Ignition</Text>
            </View>
            <View style={styles.text}>
              <Text style={styles.textRight}>{this.props.asset.ignitionStatus}</Text>
            </View>
          </View>
          <View style={styles.separator} />

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: '#ffffff'
  },
  map: {
    flex: 3.5,
    marginTop: 30
  },
  textWrapper: {
    flex: 3
  },
  details: {
    marginTop: 10,
    marginBottom: 10,
    flexDirection: 'row'
  },
  label: {
    flex: 1,
    paddingLeft: 30
  },
  text: {
    flex: 1,
    paddingLeft: 200
  },
  separator: {
    height: 1,
    backgroundColor: '#dddddd'
  },
});

export default Detail;
