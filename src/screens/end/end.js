import * as React from 'react';
import { View, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Text, Appbar, Button, TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign'
import AsyncStorage from "@react-native-community/async-storage"

import { connect } from "react-redux"

import QRCode from 'react-native-qrcode-svg';

class End extends React.Component {
  state = {
    dataItemKirimNya: [],
    data:'Rp.185.000',
    noTbl: 0,
   
  }
  getDataTable = async () => {
    const tmpTbl = await AsyncStorage.getItem('noTbl')
    await this.setState({
      data:this.props.Transaction.dataTransBiasa
    })
    await this.setState({
      noTbl: tmpTbl
    })
  }

  // DataQrCode=async()=>{
  //   await this.setState({
  //     data:this.props.Transaction.dataTransBiasa
  // }

  componentDidMount() {
    this.getDataTable()
  }

  aksiAddOrder = async () => {
    const tmpTbl = await AsyncStorage.clear()
    await this.setState({
      noTbl: tmpTbl
    })
    await this.props.navigation.navigate('Open')
  }

  render() {

 
    return (
      <View>
        <Appbar.Header style={styles.Aheader}>
          <Appbar.Content title={'PLEASE BRING QRCODE TO CASHIER'}
            color={'white'} />
        </Appbar.Header>
        <View style={styles.container}>
          <View style={styles.logoContainer}>

            <QRCode
              
              style={{width:"50%", height:"50%"}}
              size={300}
              value={this.state.data}
            />

            <Text style={styles.title2}>Thank For Comming Mr/Mrs: No {this.state.noTbl}</Text>
          </View>
        </View>
        <View style={{ marginVertical: 500 }}>
          <TouchableOpacity
            style={styles.buttonx}
            onPress={() => this.aksiAddOrder()}
          >
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginTop: 26, marginLeft: 10 }}>NEXT ORDER</Text>
              <View style={{ marginTop: 13, alignItems: 'flex-end', marginLeft: 15 }}>
                <Icon name='shoppingcart' color='white' size={50} />
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

}
const mapStatePros = (state) => {
  return {
    Order: state.Order,
    Transaction: state.Transaction
  }
}
export default connect(mapStatePros)(End)

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flex: 1
  },
  Aheader: {
    backgroundColor: '#e67e22',
    fontWeight: 'bold',
    marginLeft: 30
  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 100,
  },
  title: {
    color: '#FFFFFF'
  },
  title2: {
    fontSize: 150,
    fontWeight: 'bold',
    color: '#e67e22',
    marginTop: 20,
    width: 250,
    textAlign: 'center',
    opacity: 0.8,
    fontSize: 15
  },
  buttonx: {
    height: 80,
    width: "50%",
    borderBottomRightRadius: 50,
    marginTop: 2,
    backgroundColor: '#e67e22',
  },
})



