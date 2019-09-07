
import React, {Component} from 'react';
import {Modal, Text, TouchableHighlight,TouchableOpacity,View,Dimensions,Style, Alert} from 'react-native';
import { CardItem, Card} from 'native-base';


const timer = require('react-native-timer');
 
export default class Foo extends React.Component {
  state = {
    showMsg: false
  };
 
  componentWillUnmount() {
    timer.clearTimeout(this);
  }
 
  showMsg() {
    this.setState({showMsg: true}, () => timer.setTimeout(
      this, 'hideMsg', () => this.setState({showMsg: false}), 2000
    ));
  }
 
  render() {
    return (
      <View style={{flex: 1}}>
        <TouchableOpacity onPress={() => requestAnimationFrame(() => this.showMsg())}>
          <Text>Press Me</Text>
        </TouchableOpacity>
 
        {this.state.showMsg ? (
          <Text>Hello!!</Text>
        ) : (
          null
        )}
      </View>
    )
  }
}