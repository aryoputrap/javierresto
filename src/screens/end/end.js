import * as React from 'react';
import { View, Image, StyleSheet, ScrollView } from 'react-native';
import { Text, Appbar, Button,TextInput } from 'react-native-paper';



class Profil extends React.Component{

render() {

    return (

    <ScrollView style={{backgroundColor: '#FFFF'}}>
      <Appbar.Header style={styles.Aheader}>
          <Appbar.Content title={'PLEASE BRING BARCODE TO CASHIER'}
          color = {'white'}/>
      </Appbar.Header>
      <View style={styles.container}>
            <View style={styles.logoContainer}><Image style={styles.logo}
            source={require('../../asset/barcode.png')}/>
            <Text style={styles.title2}>THANKS #50</Text>
     </View>
     </View>
    </ScrollView>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flex: 1
  },
  Aheader: {
    backgroundColor: '#e67e22',
    fontWeight: 'bold',
    marginLeft:30
  },

  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    marginLeft:20,
    marginRight:20
  },

  logo: {
    justifyContent: 'center',
    marginTop: 100
  },

  login: {
    marginLeft:100,
    borderRadius: 20,
    width: null,
    height: 40,
    backgroundColor: '#e67e22',
    },

    title :{
     color: '#FFFFFF'
    },

    title2 :{
      fontSize:50,
      fontWeight:'bold',
      color: '#e67e22',
      marginTop: 20,
      width: 250,
      textAlign: 'center',
      opacity: 0.8,
      fontSize: 15
     },

     button: {
       width: 300,
       marginVertical: 50,
       alignContent: 'center',
     },

})



export default Profil