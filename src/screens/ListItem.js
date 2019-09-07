import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Share } from "react-native";
import { Card, IconButton, Appbar, Button, Title } from "react-native-paper";
import Icon from 'react-native-vector-icons/AntDesign'
import { connect } from 'react-redux'

import {setOrderHome,setisAddtoChart} from '../_action/Order'

class ListItem extends Component {

  state = {
    count: 1,
    isAddToCart: false,
    Tmp :null
  };
  //Quantity

  AddCart = async() => {
    let dataTemporerArrayItem = []
    await this.props.dispatch(setOrderHome(true))
    await this.setState({
      isAddToCart: true,
      Tmp:{
        id: this.props.item.id,
        name : this.props.item.name,
        image: this.props.item.image,
        qty:this.state.count
      }
    })
    // if(this.props.Order.dataItemTmp){
    //   this.props.Order.dataItemTmp.map( (item,index) => {
    //     if(item.id == this.state.Tmp.id){
    //       const baruTemp = {
    //         id:item.id,
    //         name:item.name,
    //         image:item.image,
    //         qty:item.qty+1
    //       }
    //       dataTemporerArrayItem.push(baruTemp)
    //     }else{
    //       dataTemporerArrayItem.push(item)
    //     }
    //     return{

    //     }
    //   })
    // }
    await this.props.dispatch(setisAddtoChart(this.state.Tmp))
    await console.log(this.props.Orders)
  }

  Tambah = () => {
    this.setState(nilaiSebelum => ({
      count: nilaiSebelum.count + 1
    }));
  };

  Kurang = () => {
    //assignment
    this.setState(nilaiSebelum => ({
      count: Math.max(nilaiSebelum.count - 1, 1)
    }))
    if(this.state.count <= 1){
      this.setState({
        isAddToCart:false
      })
    }
  }

  cekNominal = nominal => {
    const reverse = nominal
      .toString().split("").reverse().join("");
    const ribuan = reverse.match(/\d{1,3}/g);
    const hasil = ribuan
      .join(".").split("") .reverse() .join("");
    return hasil;
  };

  //addvar let
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Card style={styles.container}>
          <Card.Cover style={styles.image}
            source={{ uri: this.props.item.image }} />
          <Card.Content>
            <View style={{ flexDirection: 'row' }}>
              <View style={styles.namaContainer}>
                <Text style={styles.namaTempat}>{this.props.item.name}</Text>
              </View>
              <Text style={styles.separated}>•</Text>
              <View style={styles.namaContainer}>
                <Text style={styles.namaStatus}>{this.props.item.status}</Text>
              </View>
            </View>
            <View>
              <Text style={styles.harga}>
                Rp {this.cekNominal(this.props.item.price)} / Porsi
                  </Text>
            </View>

            {this.state.isAddToCart ?
              <View style={{ alignContent: 'center', marginTop: 2 }}>
                <View style={{ height: 50, width: "100%", backgroundColor: 'white', elevation: 2, flexDirection: 'row', justifyContent: 'space-between', alignItems: "center", padding: 5, borderRadius: 5 }}>
                  <TouchableOpacity onPress={this.Kurang}>
                    <View>
                      <Icon name='minuscircleo' color='#e67e22' size={25} />
                    </View>
                  </TouchableOpacity>
                  <Text style={{ fontWeight: 'bold', color: 'black' }}>{this.state.count}</Text>
                  <TouchableOpacity onPress={this.Tambah}>
                    <View>
                      <Icon name='pluscircleo' color='#e67e22' size={25} />
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
              :
              <View style={{ marginTop: 3 }}>
                <TouchableOpacity style={styles.buttonx}
                  onPress={()=> this.AddCart()}
                >
                  <View style={{ flexDirection: 'row' }}>
                    <View style={{ marginLeft: 15, marginTop: 13 }}>
                      <Icon name='shoppingcart' color='white' size={25} />
                    </View>
                    <Text style={{
                      color: 'white', fontWeight: 'bold', alignContent: 'center',
                      fontSize: 15, justifyContent: 'center', marginLeft: 15, marginTop: 15, alignItems: 'center'
                    }}>Add to Chart</Text>
                  </View>
                </TouchableOpacity>
              </View>
            }
          </Card.Content>
        </Card>
      </View>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    Menu: state.Menu,
    Order:state.Order
  }
}
export default connect(mapStateToProps)(ListItem)

const styles = StyleSheet.create({
  container:
  {
    paddingTop: 20,
    paddingBottom: 0,
    marginBottom: 0,
  },
  image: {
    resizeMode: "cover",
    marginHorizontal: 17,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5
  },
  booking: {
    color: "black",
    fontWeight: 'bold'
  },
  descriptionContainer: {
    paddingTop: 1,
    flexDirection: "row"
  },
  bookingContainer: {
    marginTop: 2,
    padding: 5,
    backgroundColor: "#e67e22",
    borderRadius: 15
  },
  jenis: {
    color: "black",
    fontWeight: "200",
    fontSize: 14
  },
  buttonx: {
    height: 50,
    width: "100%",
    borderRadius: 10,
    marginTop: 2,
    backgroundColor: '#e67e22',
  },
  kondisi: {
    color: "black",
    fontWeight: "200",
    fontSize: 14
  },
  alamat: {
    color: "black",
    fontWeight: "bold",
    marginLeft: 5,
    fontSize: 14,
    top: 2
  },
  harga: {
    fontSize: 18,
    color: "black",
    fontWeight: "700"
  },
  namaContainer: {
    paddingVertical: 5
  },
  namaTempat: {
    color: "black",
    fontSize: 18,
    fontWeight: "400"
  },
  namaStatus: {
    color: "#e67e22",
    fontSize: 18,
    fontWeight: 'bold'
  },
  separated: {
    marginLeft: 2,
    marginRight: 2,
    marginTop: 5,
    fontSize: 20,
    color: "black",
    fontWeight: "700"
  },
});