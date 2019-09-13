import React, { Component } from 'react';
import {
  Text, View, StyleSheet, Alert, FlatList
} from 'react-native';
import Dimensions from 'Dimensions';
import { CheckBox } from 'react-native-elements'

const DeviceWidth = Dimensions.get('window').width;
const DeviceHeight = Dimensions.get('window').height;

class MedicalClearlance extends React.Component {

  constructor() {
    super();
    this.state = {
      data: [
        {
          "name": "ALL",
        },
        {
          "name": "Android",
        },
        {
          "name": "iOS",
        },
        {
          "name": "React Native",
        }
      ],
      checked: []
    }
  }
  
  componentWillMount() {
    let { data, checked } = this.state;
    let intialCheck = data.map(x => false);
    this.setState({ checked: intialCheck })
  }
   
  handleChange = (index) => {
    let checked = [...this.state.checked];
    checked[index] = !checked[index];
    this.setState({ checked });
  }
  
  render() {
    let { data, checked } = this.state;
    return (
      <FlatList
        data={ this.state.data }
        renderItem={({item, index}) =>
        <CheckBox
          center
          title={item.name}
          onPress={() => {this.setState({checked: !this.state.checked}),
           console.log(this.state.checked +' '+ index)}}
          checked={this.state.checked}/>
        }
      />
    );
  }
}

<FlatList
data={data}
renderItem={({ item, index }) =>
  <CheckBox
    center
    title={item.name}
    onPress={() => this.handleChange(index)}
    checked={checked[index]} />