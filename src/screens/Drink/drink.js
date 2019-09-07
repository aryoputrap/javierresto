import React, { Component } from 'react';
import { Container, Tab, Tabs, TabHeading, Icon, Text } from 'native-base';
import { StyleSheet, View } from 'react-native';

export default class List extends Component {

  render() {
    return (
      <View>
          <Text>Drink</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  Searchbar: {
    borderRadius: 20,
    width: null,
    height: 40,
    marginTop: 10,
    marginRight: 15,
    marginLeft: 15,
    marginBottom: 10,
    backgroundColor: '#FFFF',
    opacity: 0.5
  },

})