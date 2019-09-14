import React, {Component} from "react";
import {View, StyleSheet, Dimensions} from "react-native";
import {ScrollView, FlatList, TouchableOpacity} from "react-native-gesture-handler";
import {Button} from "react-native-paper"
import {connect} from 'react-redux'
import ListItem from "./ListItem";
import { Card, CardItem, Body, Text, Container, Content } from 'native-base';

import YesModal from '../components/modals/modal_yesno'
import Timer from '../components/timer/timer'

class ModalExample extends Component {

  constructor(props){
    super(props);
    let dataItemFilter = this.props.Menu.dataItem.filter( (item) => {
      if(item.categoryId == 3){
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
  //       id:"19",
  //       image:"https://awsimages.detik.net.id/community/media/visual/2019/03/22/d206f7dc-d4fa-4e09-887a-1c91c4c683dc_43.jpeg?w=700&q=90",
  //       price:"45000",
  //       name : "Puniki",
  //       status:"AVAIL"
  //     },
  //     {
  //       id:"20",
  //       image:"https://i2.wp.com/abiummi.com/assets/uploads/2015/06/Resep-Es-Buah-Segar-Es-krim.jpg?resize=300%2C400",
  //       price:"52000",
  //       name : "Unibi",
  //       status:"AVAIL"
  //     },
  //     ]
  //   };
  // }
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
const mapStateProps = (state) => {
  return {
    Menu: state.Menu
  }
}

export default connect(mapStateProps)(ModalExample)

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