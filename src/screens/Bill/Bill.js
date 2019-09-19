import * as React from 'react';
import { View, StyleSheet, Image, TouchableOpacity,StatusBar } from 'react-native';
import { ScrollView, FlatList } from 'react-native-gesture-handler';
import { Card, CardItem, Body, Container, Content } from 'native-base';
import { Button, Text } from 'react-native-paper';
import { Checkbox } from "react-native-paper";
import { connect } from "react-redux"
import AsyncStorage from '@react-native-community/async-storage'

import HeaderBill from '../../components/header/HeaderBill'
import HeaderBill2 from '../../components/header/HeaderBill2'
import ListBill from './listBill'

import {editTransaction} from '../../_action/Transaction'


class bill extends React.Component {
  constructor() {
    super();
    this.state = {
      checked: false,
      isEnable: false,
      jmlTotal: 0,
      discount:0,
      serviceCharge:0,
      tax:0,
      total:0,
    };
  }
  
  handleTransaction=  () => {
    let data = {
      tableNumber: this.props.Transaction.tableNumber,
      finshedTime: null,
      subtotal: this.state.total ,
      discount: this.state.discount,
      serviceCharge: this.state.serviceCharge,
      tax: this.state.tax,
      total: this.state.total,
      isPaid:true,
    }

    this.props.dispatch(editTransaction(this.props.Order.dataItemTmp[0].transactionId, data))
    this.props.navigation.navigate('EndRe')
  }
  hapusProp = () => {
    
  }

  sumHarga = () => {
    let jmlTemporer = 0
    this.props.Order.dataItemTmp.map((item) => {
      const tmpMatap = item.price * item.qty
      jmlTemporer = jmlTemporer+tmpMatap
    })
    let discount = Math.round(jmlTemporer*0)
    let serviceCharge = Math.round(jmlTemporer*0.05)
    let tax = Math.round(jmlTemporer*0.1)

    this.setState({
      jmlTotal:jmlTemporer,
      discount,
      serviceCharge,
      tax,
      total:Math.round(jmlTemporer-discount+serviceCharge+tax)
    })
  }
  componentDidMount() {
    this.sumHarga()
  }

  CekStatusOrder = () => {
    this.setState({
      isEnable: true
    })
    this.props.Order.dataItemTmp.map((item) => {
      if (!item.status) {
        this.setState({
          isEnable: false
        })
      }
    })
  }
  Nominal = nominal => {
    const reverse = nominal
      .toString().split("").reverse().join("");
    const ribuan = reverse.match(/\d{1,3}/g);
    const hasil = ribuan
      .join(".").split("").reverse().join("");
    return hasil;
  };
  render() {

    return (
      <View style={styles.container}>
        <StatusBar translucent backgroundColor="transparent" />
        <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center' }}>
          03 September 2019: 20:31{'\n'}
        </Text>
        <View style={styles.containerx}>
          <Card style={styles.card}>
            <CardItem style={{ flexDirection: 'row', alignItems: 'space-between' }}>
              <Body>
                <HeaderBill navigation={this.props.navigation} />
                <View style={styles.garis1} />
                <HeaderBill2 />
                <View style={styles.roll}>
                  <FlatList
                    style={styles.stretch}
                    data={this.props.Order.dataItemTmp}
                    renderItem={({ item }) =>
                      (
                        <ListBill
                          callBackNya={this.CekStatusOrder}
                          itemNya={item} />
                      )}
                    keyExtractor={ (item,index) => {index.toString()}}
                    showVerticalScrollIndicator={true}
                  />
                </View>
                <View style={styles.garis1} />
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'space-between',
                    backgroundColor: '#e67e22',
                    height: "24%",
                    width: '100%',
                    borderRadius: 5,
                  }}>
                  <View style={{ flex: 1 }}>
                    <Text style={styles.bill}>Sub-Total</Text>
                    <Text style={styles.bill}>Discount</Text>
                    <Text style={styles.bill}>Service Charge(5.5%)</Text>
                    <Text style={styles.bill}>Tax(10%)</Text>
                    <Text
                      style={{
                        textAlign: 'left',
                        marginVertical: 5,
                        marginHorizontal: 15,
                        fontWeight: 'bold',
                      }}>
                      Total
                  </Text>
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text style={styles.bill}>Rp.{this.Nominal(this.state.jmlTotal)}</Text>
                    <Text style={styles.bill}>Rp.{this.Nominal(this.state.discount)}</Text>
                    <Text style={styles.bill}>Rp.{this.Nominal(this.state.serviceCharge)}</Text>
                    <Text style={styles.bill}>Rp.{this.Nominal(this.state.tax)}</Text>
                    <Text style={styles.total}>Rp.{this.Nominal(this.state.total)}</Text>
                  </View>
                </View>
                <View style={styles.garis1} />
                <View style={{ flexDirection: 'row', alignItems: 'space-between' }}>
                  <Button
                    mode="contained"
                    activeOpacity="10"
                    color="#e67e22"
                    disabled={!this.state.isEnable}
                    style={{ width: '50%', marginLeft: 100 }}
                    onPress={this.handleTransaction}
                    >

                    <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>CASHIER</Text>
                  </Button>
                </View>
              </Body>
            </CardItem>
          </Card>
        </View>
      </View>
    );
  }
}
const mapStatePros = (state) => {
  return {
    Order: state.Order,
    Transaction: state.Transaction
  }
}
export default connect(mapStatePros)(bill)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 3,
    width: '100%',
    alignItems: 'center',
  },
  total: {
    textAlign: 'left',
    marginVertical: 5,
    marginHorizontal: 15,
    fontWeight: 'bold',
    color: 'white'
  },
  roll: {
    height: "37%",
    width: "100%",
  },
  stretch: {
    width: "100%",
  },
  garis1: {
    backgroundColor: '#e67e22',
    height: 1,
    width: '100%',
    marginVertical: 13,
  },
  menu: {
    fontSize: 17,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  status: {
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#e67e22',
    marginLeft: 15,
  },
  card: {
    marginTop: 5
  },
  container: {
    padding: 15,
    flex: 1
  },
  Button: {
    width: 100,
    height: 40,
    backgroundColor: 'white'
  },
  bill: {
    textAlign: 'left',
    marginVertical: 5,
    marginHorizontal: 15,
    color: 'white'
  },
});
