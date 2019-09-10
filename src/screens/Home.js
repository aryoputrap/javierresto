import React, { Component } from 'react';
import { Card, CardItem, Body, Tab, Tabs, Text, Container, TabHeading, Content } from 'native-base';
import { StyleSheet, View, StatusBar, Headers, TouchableOpacity, FlatList, Alert, Image } from 'react-native';
import { Button } from "react-native-paper"
import Icon from 'react-native-vector-icons/AntDesign'
import { connect } from "react-redux"
import { indecrement, setisAddtoChart, remove } from '../_action/Order'

import Drink from './Drink/drink2'
import Food from './Food/Food'
import Appetizer from './appetizer'
import Header from '../components/header/Header'
import { ScrollView } from 'react-native-gesture-handler';
// import { Item } from 'react-native-paper/typings/components/List';

class Home extends Component {

  handleConfirmOrder = () => {
    Alert.alert(
      "Confirm Order",
      "Are you sure to order this?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        {
          text: "OK", onPress: () => this.props.navigation.navigate('Bill')
        }
      ],
      { cancelable: false }
    );
  };

  // onClickOrder = (item) => {
  //   let orders = this.props.orders;
  //   const menuIndex = this.props.orders.data.findIndex(order => {
  //     return order.menu._id == item.menu._id;
  //   });

  //   if (order.data[menuIndex].qty > 1) {
  //     order.data[menuIndex].qty -= 1;
  //     this.props.dispatch(changeQty(orders.data));
  //   } else {
  //     orders.data.splice(menuIndex, 1);
  //     this.props.dispatch(changeQty(order.data));
  //   }
  // };

  Kurang = async (id) => {
    // //set nilai state component child
    const tmpCountObj = await this.props.Order.dataItemTmp
    let indexDataNya = tmpCountObj.findIndex((item, index) => {
      if (item.id == id) {
        return item
      }
    })
    const tmpCount = tmpCountObj[indexDataNya].qty
    if (tmpCount > 1) {
      await this.setState(({
        count: tmpCount - 1
      }))
      await this.props.dispatch(indecrement(this.state.count, id))
    } else {
      tmpCountObj.splice(indexDataNya, 1)
      await this.props.dispatch(remove(tmpCountObj))
    }
  };

  render() {
    console.log('dataorder')
    console.log(this.props.Order.dataItemTmp)
    return (
      <Container>
        <StatusBar style={{ backgroundColor: '#e67e22' }} />
        <Header />
        <Tabs>
          <Tab heading={<TabHeading style={{ backgroundColor: '#e67e22' }}>
            <Text style={{ color: '#ffff', fontWeight: 'bold' }}>Food</Text></TabHeading>}>
            <Food navigation={this.props.navigation} />
          </Tab>
          <Tab heading={<TabHeading style={{ backgroundColor: '#e67e22', }}>
            <Text style={{ color: '#ffff', fontWeight: 'bold' }} >Desert</Text></TabHeading>}>
            <Appetizer />
          </Tab>

          <Tab heading={<TabHeading style={{ backgroundColor: '#e67e22' }}>
            <Text style={{ color: '#ffff', fontWeight: 'bold' }}>Drink</Text></TabHeading>}>
            <Drink />
          </Tab>
        </Tabs>

        {this.props.Order.isAddToChart ?
          <View style={{
            height: "23%", width: "100%", position: 'relative',
            backgroundColor: 'white'
          }}>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ flex: 5 }}>
                <View style={{ height: "75%", width: "100%", alignContent: 'center' }}>
                  <ScrollView
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                  >
                    {this.props.Order.dataItemTmp.map((item, index) => {
                      return <TouchableOpacity
                        onPress={() => this.Kurang(item.id)}
                      >
                        <Image
                          source={{ uri: item.image }}
                          style={styles.Bulat}
                        />
                        <Text style={styles.ordersMenuQty}>{item.qty}</Text>
                        <Text style={styles.textOrder}>{item.name}</Text>
                      </TouchableOpacity>
                    }
                    )}
                  </ScrollView>
                </View>
              </View>
              <View style={{ flex: 1, borderBottomLeftRadius: 50 }}>
                <TouchableOpacity style={styles.Button}
                  onPress={() => this.props.navigation.navigate('Callsc')}>
                  <Icon name='phone' color='white' size={35} style={{ justifyContent: 'center', alignItems: 'center' }} />
                </TouchableOpacity>
              </View>
            </View >
            <View style={{ marginBottom: 100, alignContent: 'center', justifyContent: 'center', flexGrow: 1 }}>
              <TouchableOpacity
                onPress={this.handleConfirmOrder}
                style={styles.Buttonx}
              >
                <Text style={styles.textbutonOrder}>
                  ORDER
                     </Text>
              </TouchableOpacity>
            </View>
          </View>
          :
          false
        }
      </Container>
    );
  }
}
const mapStatePros = (state) => {
  return {
    Order: state.Order
  }
}
export default connect(mapStatePros)(Home)

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
  },
  textbutonOrder: {
    color: '#FFF',
    marginTop: 5,
    fontWeight: 'bold',
    fontSize: 25,
    justifyContent: 'center'
  },
  textOrder: {
    marginHorizontal: 23,
    alignContent: 'center',
    alignItems: 'center',
    fontSize: 12
  },
  ordersMenuQty: {
    position: "absolute",
    right: 5,
    bottom: 15,
    backgroundColor: "#cc6000",
    paddingHorizontal: 6,
    borderRadius: 10,
    color: "#fff"
  },
  Bulat: {
    width: 70,
    marginBottom: 5,
    marginTop: 10,
    marginLeft: 10,
    marginHorizontal: 5,
    height: 70,
    borderRadius: 50
  },
  CardMenu: {
    position: 'absolute',
    alignItems: 'center', justifyContent: 'center',
    bottom: 0,
    height: '20%',
    width: '70%'
  },
  Button: {
    borderBottomLeftRadius: 30,
    width: "100%",
    height: "60%",
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#e67e22",
    color: "#e67e22"
  },
  Buttonx: {
    width: "95%",
    height: "50%",
    borderRadius: 10,
    marginBottom: 70,
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: "#e67e22",
  },
  viewButton: {
    width: 200,
    position: 'absolute',
    marginTop: 700,
    flexDirection: 'row'
  },
  stretch: {
    width: "100%"
  },
  kotaItem: {
    marginTop: 5,
    marginRight: 5
  }
});
