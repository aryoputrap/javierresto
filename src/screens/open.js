import * as React from 'react';
import { View, Image, StyleSheet, ScrollView, ImageBackground, StatusBar } from 'react-native';
import { Text, Appbar, Button, TextInput, ActivityIndicator } from 'react-native-paper';
import { CosEdit, CosButton } from '../components/Table/Table'
import { connect } from 'react-redux'
import { getMenu } from '../_action/Menu'
import { addTransaction } from '../_action/Transaction'
import AsyncStorage from "@react-native-community/async-storage"

class Profil extends React.Component {
  state = {
    isLoadingOpen: false,
    textTblNumber: ''
  }
  ChangeText = (text) => {
    this.setState({
      textTblNumber: text,

    })
  }
  aksiSubmit = async () => {
    await this.setState({
      isLoadingOpen: true
    })
    if(this.state.textTblNumber!=='')
    { await this.props.dispatch(getMenu())
    await this.props.dispatch(addTransaction({
      tableNumber: this.state.textTblNumber
    }))
    await AsyncStorage.setItem('noTbl',this.state.textTblNumber)
    await this.props.navigation.navigate('Home')
    }
    else(alert('Dear Mr/Mrs please enter number table')
    )
    await this.setState({
      isLoadingOpen: false
    })
  }
  render() {
    return (
      <View style={{ backgroundColor: '#FFFF' }}>
        <StatusBar  backgroundColor="#e67e22" barStyle="light-content"/>
        <View style={styles.container}>
          <ImageBackground
            resizeMode='stretch'
            style={{ width: 100, height: 100 }}>
            <Image source={require('./../asset/circle1.png')} />
          </ImageBackground>
          <View style={styles.logoContainer}>
            <Image style={styles.logo}
              source={require('./../asset/logo.jpg')} />
            <Text style={styles.title2}>Wellcome to JAVIER-RESTO</Text>
            <Text style={styles.title2}>For Passanger</Text>
          </View></View>
        <View>
          <Text style={{
            marginLeft: 100,
            marginTop: 10,
            fontSize: 18,
            color: "#e67e22",
            fontWeight: 'bold',
          }}>Please enter table number </Text>
        </View>
        <View style={{ marginLeft: 100, width: '50%', marginTop: 10 }}>
          <CosEdit
            placeholder='Enter table '
            keyboardType='numeric'
            onChangeText={this.ChangeText}
          />
        </View>
        {!this.state.isLoadingOpen ?
          <View>
            <View style={styles.button}>
              <Button style={styles.login} mode="contained" onPress={() => this.aksiSubmit()}>
                <Text style={styles.title}> SUBMIT </Text>
              </Button>
            </View>
          </View>
          :
         <ActivityIndicator color='#e67e22' style={styles.loading}></ActivityIndicator>
        }
      </View>
    )
  }

}
const mapStateToProps = (state) => {
  return {
    Menu: state.Menu,
    Order: state.Order,
    Transaction: state.Transaction
  }
}

export default connect(mapStateToProps)(Profil)

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
  loading:{
    alignSelf:'center',
    color:'#e67e22',
    marginTop:20
  },
  Aheader: {
    backgroundColor: '#e67e22',
    fontWeight: 'bold',
    marginLeft: 120
  },
  logoContainer: {
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20
  },
  logo: {
    justifyContent: 'center',
    marginTop: 100,
    marginLeft: 10
  },
  login: {
    marginLeft: 100,
    borderRadius: 20,
    width: null,
    height: 50,
    backgroundColor: '#e67e22',
  },
  title: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    alignContent: 'center',
    fontSize: 20,
    paddingTop: 5
  },
  title2: {
    color: '#e67e22',
    fontWeight: 'bold',
    marginTop: 5,
    width: 250,
    textAlign: 'center',
    opacity: 0.8,
    fontSize: 15
  },

  button: {
    width: 300,
    marginLeft: 5,
    marginVertical: 20,
    alignContent: 'center',
  },

})



