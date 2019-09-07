import React, { Component } from 'react';
import { Card, CardItem, Body, Tab, Tabs, Text, Container, TabHeading, Content } from 'native-base';
import { StyleSheet, View, StatusBar, Headers, TouchableOpacity, FlatList, Alert, Image } from 'react-native';
import { Button } from "react-native-paper"
import Icon from 'react-native-vector-icons/AntDesign'
import { connect } from "react-redux"
import { setHomeTmp } from '../_action/Order'
import {setisAddtoChart} from '../_action/Order'

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
        { text: "OK", onPress: () => this.props.navigation.navigate('Bill') }
      ],
      { cancelable: false }
    );
  };

  // componentDidMount(){
  //   console.log(this.props.Order.dataItemTmp)
  // }

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
          <View style={{ height: "23%", width: "100%", position: 'relative', 
            backgroundColor: 'white'}}>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ flex: 4 }}>
                <View style={{ height: "75%", width: "100%",alignContent:'center' }}>
                  <ScrollView
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                  >
                    {this.props.Order.dataItemTmp.map(item => {
                         return<TouchableOpacity
                        >
                          <Image
                            source={{uri:item.image}}
                            style={styles.Bulat}
                          />
                          <Text style={{marginLeft:18, fontSize:12}}>{item.name}({item.qty})</Text>
                        </TouchableOpacity>
                    }
                    )}
                  </ScrollView>
                </View>
              </View>
              <View style={{ flex: 1 }}>
                <Button style={styles.Button}
                  onPress={() => this.props.navigation.navigate('Callsc')}>
                  <Icon name='phone' color='white' size={35} style={{ justifyContent: 'center', alignItems: 'center' }} />
                </Button>
              </View>
            </View >
            <View style={{marginBottom:100, alignContent:'center', justifyContent:'center', flexGrow:1}}>
              <Button
                onPress={this.handleConfirmOrder}
                style={styles.Buttonx}>
                <Text style={{ color: '#FFF', fontWeight: 'bold', fontSize: 15, justifyContent: 'center' }}>
                  BILL VIEW
                     </Text>
              </Button>
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
    borderRadius: 30,
    width: 70,
    height: 70,
    marginRight: 20,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#e67e22",
    color: "#e67e22"
  },
  Buttonx: {
    borderRadius: 10,
    marginBottom: 60,
    marginLeft: 10,
    marginRight: 10,
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
