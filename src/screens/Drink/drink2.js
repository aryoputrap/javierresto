import React, {Component} from "react";
import {View, StyleSheet, Dimensions} from "react-native";
import {ScrollView, FlatList, TouchableOpacity} from "react-native-gesture-handler";
import {Button} from "react-native-paper"

import ListItem from "../ListItem";
import { Card, CardItem, Body, Text, Container, Content } from 'native-base';
// import { connect } from 'react-redux'
// import { ambilKost } from '../../../redux/_actions/ListKost'
// import { Button } from "react-native-paper";
// import ButtonFilter from '../../component/ButonFilter';


 export default class LihatDaftar extends Component{
    constructor(props){
      super(props);
      this.state = {
        lihatDaftar:[
        {
          id:"7",
          image:"https://1.bp.blogspot.com/-CX1yc7M8Heo/VE3nfqOx0GI/AAAAAAAAAaQ/-R-2grATdOE/s1600/sake1.jpg",
          price:"50000",
          name: "Sake",
          status:"AVAIL",
        },
        {
          id:"8",
          image:"https://cdn2.tstatic.net/bali/foto/bank/images/ilustrasi-teh-hijau2_20160408_090543.jpg",
          price:"2000",
          name : "Teh",
          status:"AVAIL",
        },
        {
          id:"9",
          image:"https://www.befreetour.com/img/artikel/minuman-khas-berbagai-negara-yang-harus-anda-coba.png",
          price:"9000",
          name : "Squola",
          status:"AVAIL",
        },
        {
          id:"10",
          image:"https://i2.wp.com/blog.golbsalt.com/wp-content/uploads/2012/06/mojito.jpg",
          price:"190000",
          name : "Limepun",
          status:"AVAIL"
        },
        {
          id:"11",
          image:"https://i1.wp.com/cakhasan.com/wp-content/uploads/2018/12/teh-kocok.jpg?fit=600%2C400&ssl=1",
          price:"30000",
          name : "Kisiyubin",
          status:"AVAIL"
        },
        {
          id:"12",
          image:"https://awsimages.detik.net.id/community/media/visual/2019/03/22/f9f9ffbb-6f9a-48c1-8396-2fc09a750779.jpeg?a=1",
          price:"30000",
          name : "Uniki",
          status:"AVAIL"
        },
        {
          id:"13",
          image:"https://cdn.idntimes.com/content-images/post/20180704/499a151e97c7785ab98e374cf982d835.jpg",
          price:"45000",
          name : "Prem Tea",
          status:"AVAIL"
        },
        {
          id:"14",
          image:"http://resephariini.com/wp-content/uploads/2015/02/CAFE-6-1024x1024.jpg",
          price:"52000",
          name : "Getama",
          status:"AVAIL"
        },
        ]
      };
    }
    // constructor() {
    // super();
    //   this.state = {
    //     isListKost: false,
    //     udahLogin: false,
    //     tokenNya: '',
    //     noPage: 0,
    //     dataItem: '',
    //     isModalVisible: false
    //   };
    // }
  
    // componentDidMount(){
    //   // this._cekLogin();
    //   this.props.dispatch(ambilKost())
    // }
  
    // paramNavigate = (item) => {
    //   this.props.navigation.navigate('KostDetail')
    // }

    render() { 
    
      return(
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
          {/* <View style={{marginBottom:90}}>
              <Card style={styles.CardMenu}>
                <CardItem style={{alignItems:'center', justifyContent:'center', marginBottom:100, marginTop:190 }}>
                  <View style={{flex:1, borderColor:'black'}}>
                    <Text>TEMPAT FOTO SINI</Text>
                  </View>
                  <View style={{flex:1,flexDirection:'row'}}>
                  <Button style={styles.Button}>
                      CALL
                  </Button> 
                  <Button style={styles.Button}>CONFRIM</Button>  
                  </View>    
                </CardItem>
                </Card> 
                </View>
                <View>
                   <Button 
                    onPress={() => this.props.navigation.navigate('Bill')}
                     style={styles.Buttonx}>
                     <Text style={{color:'#FFF',fontWeight:'bold', fontSize:15, justifyContent:'center'}}>
                       BILL VIEW
                       </Text>
                    </Button>
              </View> */}
        </Container>
       );
    }
  }
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