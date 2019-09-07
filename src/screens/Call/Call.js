import React, { Component } from "react";
import { View, Image, StyleSheet, ScrollView, ImageBackground, StatusBar} from 'react-native';
import { Button } from "react-native-paper"


export default class Call extends Component {
  render() {
    return (
    <View>
        <ImageBackground 
            resizeMode='stretch'
            style={{width:100,height:100,borderRadius:100,marginTop:100,alignItems:'center',alignSelf:'center'}}> 
            <Image style={{alignContent:'center'}} source={require('../../asset/cos.png')}/>
            </ImageBackground>
     </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
  },
 
});
