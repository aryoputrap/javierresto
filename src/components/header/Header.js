import React, { Component } from 'react';
import { View, StyleSheet, StatusBar} from 'react-native';
import { Header, Left, Icon,Text, Body, Right, Button, Content, Container } from 'native-base';
import { IconButton, Colors } from 'react-native-paper';
import IconIon from 'react-native-vector-icons/Ionicons'
import AsyncStorage from "@react-native-community/async-storage"


class header extends Component {
  state = {
    dataItemKirimNya: [],
    noTbl:0
  }
  getDataTable = async()=>{
    const tmpTbl = await AsyncStorage.getItem('noTbl') 
    await this.setState({
      noTbl:tmpTbl
    })
  }
   componentDidMount(){
    this.getDataTable()
   }

  render() {
    return (
      <View>
        <Header style={{backgroundColor: "#e67e22" }}>
          <Left style={{flex:1}}>
          <Text style={{color:'white',fontWeight: 'bold', fontSize:20}}>
              No:{this.state.noTbl}
          </Text>
          </Left>
            <Text style={{
              color: "white", flex: 2,
              textAlign: 'justify', marginLeft: 100, marginTop: 17,
              fontWeight: 'bold', alignContent: 'space-between',fontSize:20
            }}>
              JAVIER
            </Text>
          <Right>
          
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

