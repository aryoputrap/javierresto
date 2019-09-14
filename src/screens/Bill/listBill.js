import * as React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { ScrollView, FlatList } from 'react-native-gesture-handler';
import { Card, CardItem, Body, Container, Content } from 'native-base';
import { Button, Text } from 'react-native-paper';
import { Checkbox } from "react-native-paper";
import { connect } from "react-redux"


class bill extends React.Component {
  constructor() {
    super();
    this.state = {
      checked: false
    };
  }

  manggilCallback = () => {
    this.setState({ checked: !this.state.checked });
    let semuaDataOrder = this.props.Order.dataItemTmp
    const indexObjOrder = semuaDataOrder.findIndex((item) => {
      if (item.menuId == this.props.itemNya.menuId) {
        return item
      }
    })
    semuaDataOrder[indexObjOrder] = {
      ...semuaDataOrder[indexObjOrder],
      status: !this.state.checked
    }
    this.props.callBackNya()
    // console.warn(semuaDataOrder)
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
    const { checked } = this.state;
    const isEnable = checked == !false;
    return (
      <ScrollView>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ alignItems: 'space-between', marginLeft: 15 }}>
              <Checkbox
                color="#e67e22"
                status={checked ? "checked" : "unchecked"}
                onPress={() => this.manggilCallback()}
              />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 15, marginLeft: 45, marginTop: 7 }}>
                {this.props.itemNya.name}
              </Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 15, marginLeft: 20, textAlign: 'center', marginTop: 7 }}>
                {this.props.itemNya.qty}
              </Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 15, marginTop: 7 }}>
                Rp.{this.Nominal(this.props.itemNya.price * this.props.itemNya.qty)}
              </Text>
            </View>
          </View>
    </ScrollView>

    );
  }
}
const mapStatePros = (state) => {
  return {
    Order: state.Order
  }
}
export default connect(mapStatePros)(bill)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    width: '100%',
    alignItems: 'center',
  },
  bill: {
    textAlign: 'left',
    marginVertical: 5,
    marginHorizontal: 15,
    color: 'white'
  },
});
