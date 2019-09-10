import * as React from 'react';
import { View, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Text, Appbar, Button, TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign'


class Profil extends React.Component {

  render() {

    return (
      <View>
        <Appbar.Header style={styles.Aheader}>
          <Appbar.Content title={'PLEASE BRING QRCODE TO CASHIER'}
            color={'white'} />
        </Appbar.Header>
        <View style={styles.container}>
          <View style={styles.logoContainer}>
            <Image style={styles.logo}
              source={require('../../asset/barcode.png')} />
            <Text style={styles.title2}>THANKS #50</Text>
          </View> 
        </View>
      <View style={{marginVertical:500}}>
          <TouchableOpacity
            style={styles.buttonx}
            onPress={() => this.props.navigation.navigate('Open')}
          >
            <View style={{marginTop: 13, alignItems:'flex-end', marginRight:20}}>
              <Icon name='shoppingcart' color='white' size={50} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
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
    marginLeft: 30
  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 100,
  },
  title: {
    color: '#FFFFFF'
  },
  title2: {
    fontSize: 150,
    fontWeight: 'bold',
    color: '#e67e22',
    marginTop: 20,
    width: 250,
    textAlign: 'center',
    opacity: 0.8,
    fontSize: 15
  },
  buttonx: {
    height: 80,
    width: "50%",
    borderBottomRightRadius:50,
    marginTop: 2,
    backgroundColor: '#e67e22',
  },
})



export default Profil