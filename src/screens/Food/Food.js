import React, { Component } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { ScrollView, FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { Button } from "react-native-paper"
import IconIon from 'react-native-vector-icons/Ionicons'
import { connect } from 'react-redux'
import { setDataDummyMenus } from '../../_action/Menu'

import ListItem from "../ListItem";
import { Card, CardItem, Body, Text, Container, Content } from 'native-base';
// import { connect } from 'react-redux'
// import { ambilKost } from '../../../redux/_actions/ListKost'
// import { Button } from "react-native-paper";
// import ButtonFilter from '../../component/ButonFilter';


class LihatDaftar extends Component {

  // componentDidMount() {
  //   this.props.dispatch(setDataDummyMenus(this.state.lihatDaftar))
  // }

  constructor(props){
    super(props);
    let dataItemFilter = this.props.Menu.dataItem.filter( (item) => {
      if(item.categoryId == 1){
        return item
      }
    })
    this.state={
      lihatDafftar:dataItemFilter
    }
  }
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     lihatDaftar: [
  //       {
  //         id: "5",
  //         image: "https://dwgfmnrdprofc.cloudfront.net/wp-content/uploads/2017/10/afuri-vegetarian-ramen-tokyo-933x700.jpg",
  //         price: "289000",
  //         name: "Shinjunku",
  //         status: "AVAIL",
  //       },
  //       {
  //         id: "6",
  //         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSexUK2C9aFiYkQEBjjLlX8efA9Mj73dpvni8m58PRGiWu5Wvfq",
  //         price: "190000",
  //         name: "Yakitori",
  //         status: "AVAIL",
  //       },

  //     ]
  //   };
  // }
  render() {
    return (
      <Container>
        <Content>
          <FlatList
            numColumns={2}
            style={styles.stretch}
            data={this.state.lihatDafftar}
            renderItem={({ item }) =>
              (
                <ListItem
                  item={item}
                  navigation={this.props.navigation}
                />
              )}
            keyExtractor={item => item.id}
            showVerticalScrollIndicator={true}
          >
          </FlatList>
        </Content>
      </Container>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    Menu: state.Menu
  }
}
export default connect(mapStateToProps)(LihatDaftar)

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
  },
  CardMenu: {
    position: 'absolute',
    alignItems: 'center', justifyContent: 'center',
    bottom: 0,
    height: '20%',
    width: '100%'
  },
  Button: {
    borderRadius: 100,
    marginLeft: 5,
    marginRight: 5,
    backgroundColor: "#ababab",
    color: "white"
  },
  Buttonx: {
    borderRadius: 10,
    marginBottom: 15,
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
