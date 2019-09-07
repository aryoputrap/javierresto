import React, { Component } from 'react';
import { View, StyleSheet, StatusBar} from 'react-native';
import { Header, Left, Icon,Text, Body, Right, Button, Content, Container } from 'native-base';
import { IconButton, Colors } from 'react-native-paper';
import IconIon from 'react-native-vector-icons/Ionicons'


class header extends Component {

  render() {
    return (
      <View>
      <StatusBar backgroundColor="#f0932b" barStyle="light-content"/>
        <Header style={{elevation:0, backgroundColor: "#e67e22" }}>
          <Left>
          <Text style={{color:'white',fontWeight: 'bold', fontSize:20}}>
              #50
          </Text>
          </Left>
            <Text style={{
              color: "white", flex: 1,
              textAlign: 'justify', marginLeft: 100, marginTop: 17,
              fontWeight: 'bold', alignContent: 'space-between',fontSize:20
            }}>
              JAVIER
            </Text>
          <Right>
            {/* <IconIon name='md-timer' size={17} style={{ marginRight: 5,color:'white',fontWeight: 'bold', fontSize:20 }}></IconIon>
            <Text style={{ marginRight: 5,color:'white',fontWeight: 'bold', fontSize:20 }}>0:10:40</Text> */}
          </Right>
        </Header>
      </View>
    );
  }
}

export default header;

const styles = StyleSheet.create({
  container: {},
  luasTitle: {},
  luasContainer: {
    padding: 20,
    paddingBottom: 0
  },
  pemilikIcon: {
    color: "white",
    marginLeft: 10,
    marginRight: 20
  },
  pemilik: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center"
  },
  nomorHp: {
    color: "#e67e22"
  }
});

