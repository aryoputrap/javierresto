import React, {Component} from "react";
import {View, StyleSheet, Dimensions} from "react-native";
import {ScrollView, FlatList, TouchableOpacity} from "react-native-gesture-handler";
import {Button} from "react-native-paper"

import ListItem from "./ListItem";
import { Card, CardItem, Body, Text, Container, Content } from 'native-base';

import YesModal from '../components/modals/modal_yesno'
import Timer from '../components/timer/timer'

export default class ModalExample extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      lihatDaftar:[
      {
        id:"13",
        image:"https://cdn2.tstatic.net/travel/foto/bank/images/dessert_20170512_213235.jpg",
        price:"50000",
        name: "Menawi",
        status:"AVAIL",
      },
      {
        id:"14",
        image:"https://d3h1lg3ksw6i6b.cloudfront.net/media/image/2018/05/16/866eafb598ab43f39e1ae3b251579500_shutterstock_773880859.jpg",
        price:"25000",
        name : "Kantaro",
        status:"AVAIL",
      },
      {
        id:"15",
        image:"https://cdn-image.hipwee.com/wp-content/uploads/2016/12/hipwee-053a660da01ba77cb7a3b6dc165eb0de71233b8c-1200x630.jpg",
        price:"10000",
        name : "Gobban",
        status:"AVAIL",
      },
      {
        id:"16",
        image:"http://japanesestation.com/wp-content/uploads/2014/06/japan-dessert-2.jpg",
        price:"100000",
        name : "Dango",
        status:"AVAIL"
      },
      {
        id:"17",
        image:"http://i.imgur.com/ES4mGbB.jpg",
        price:"50000",
        name : "Yaukoso",
        status:"AVAIL"
      },
      {
        id:"18",
        image:"http://keio-dept-blog.cocolog-nifty.com/blog/images/2014/12/13/dounuts.jpg",
        price:"40000",
        name : "Keio",
        status:"AVAIL"
      },
      {
        id:"19",
        image:"https://awsimages.detik.net.id/community/media/visual/2019/03/22/d206f7dc-d4fa-4e09-887a-1c91c4c683dc_43.jpeg?w=700&q=90",
        price:"45000",
        name : "Puniki",
        status:"AVAIL"
      },
      {
        id:"20",
        image:"https://i2.wp.com/abiummi.com/assets/uploads/2015/06/Resep-Es-Buah-Segar-Es-krim.jpg?resize=300%2C400",
        price:"52000",
        name : "Unibi",
        status:"AVAIL"
      },
      ]
    };
  }
  // constructor(){
  //   super();
  //   this.state={
  //       isModalVisible:false,
  //       choosenData:'',
  //   };
  // }
  
  // changeModeVisibility=(bool)=>{
  //     this.setState({isModalVisible:bool});
  // }

  // setData=(data)=>{
  //   this.setState({choosenData:data});
  //   this.props.setState(data);
  // }

  render() {
    return (
      
      <Container>
        <Content>
        <FlatList
          numColumns={2}
          style={styles.stretch}
          data={this.state.lihatDaftar}
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

const styles = StyleSheet.create({
  contentContainer:{
      flex:1,
      position:'absolute',
      alignItems:'center',
      justifyContent:'center'
  },
  modal:{
      height:150,
      paddingTop:100,
      alignItems:'center',
      alignSelf:'center',
      textAlign:'center',
      borderRadius:10,
      backgroundColor:'white'
  },
  text: {
      margin:5,
      fontSize:16,
      fontWeight:'bold'
  },
  touchablelight:{
      flex:1,
      backgroundColor:'white',
      paddingVertical:10,
      alignSelf:'stretch',
      borderRadius:10
  },
  textView:{
      flex:1,
      alignItems:'center'
  },
  buttonView:{
      width:'100%',
      flexDirection:'row'

  }


})  

      // <View >
      //   <TouchableHighlight onPress={()=>this.changeModeVisibility(true)}>
      //     <Text>Open Modal Yes/No</Text>
      //   </TouchableHighlight>
      //   <Modal
      //     styles={[styles.touchablelight]}
      //     transparent={true} visible={this.state.isModalVisible} 
      //     onRequestClose={()=>this.changeModeVisibility(false)}
      //     animationType='fade'>
      //    <YesModal changeModeVisibility={this.changeModeVisibility} setData={this.setData}/>
      //   </Modal>
      // </View>