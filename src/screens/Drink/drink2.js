import React, {Component} from "react";
import {View, StyleSheet, Dimensions} from "react-native";
import {ScrollView, FlatList, TouchableOpacity} from "react-native-gesture-handler";
import {Button} from "react-native-paper"
import {connect} from 'react-redux'

import ListItem from "../ListItem";
import { Card, CardItem, Body, Text, Container, Content } from 'native-base';
// import { connect } from 'react-redux'
// import { ambilKost } from '../../../redux/_actions/ListKost'
// import { Button } from "react-native-paper";
// import ButtonFilter from '../../component/ButonFilter';


class LihatDaftar extends Component{

  constructor(props){
    super(props);
    let dataItemFilter = this.props.Menu.dataItem.filter( (item) => {
      if(item.categoryId == 2){
        return item
      }
    })
    this.state={
      lihatDafftar:dataItemFilter
    }
  }
    // constructor(props){
    //   super(props);
    //   this.state = {
    //     lihatDaftar:[
    //     {
    //       id:"13",
    //       image:"https://cdn.idntimes.com/content-images/post/20180704/499a151e97c7785ab98e374cf982d835.jpg",
    //       price:"45000",
    //       name : "Prem Tea",
    //       status:"AVAIL"
    //     },
    //     {
    //       id:"14",
    //       image:"http://resephariini.com/wp-content/uploads/2015/02/CAFE-6-1024x1024.jpg",
    //       price:"52000",
    //       name : "Getama",
    //       status:"AVAIL"
    //     },
    //     ]
    //   };
    // }

    render() { 
    
      return(
        <Container>
        <Content>
        <FlatList
          numColumns={2}
          style={styles.stretch}
          data={this.state.lihatDafftar}
          renderItem={({item}) =>
          (
            <ListItem
              item={item}
              navigation={this.props.navigation}
            />
          )}
          keyExtractor={item=>item.id}
          showVerticalScrollIndicator ={true}
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
      flexDirection:"row",
      flex:1,
    },
    CardMenu:{
      position:'absolute',
      alignItems:'center', justifyContent:'center', 
      bottom:0,
      height:'20%',
      width:'100%'
    },
    Button:{
      borderRadius:100,
      marginLeft:5,
      marginRight:5,
      backgroundColor:"#ababab",
      color:"white"
    },
    Buttonx:{
      borderRadius:10,
      marginBottom:15,
      marginLeft:10,
      marginRight:10,
      backgroundColor:"#e67e22",
    },
    viewButton: {
      width:200,
      position:'absolute',
      marginTop:700,
      flexDirection:'row'
    },
    stretch:{
      width:"100%"
    },
    kotaItem: {
      marginTop:5,
      marginRight: 5
    }
  });
  

// const mapStateToProps = (state) => {
//   return {
//     ListKost: state.ListKost
//   }
// }

// export default connect(mapStateToProps)(LihatDaftar)