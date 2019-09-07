import * as React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Card, CardItem, Body, Container, Content } from 'native-base';
import { Button, Text } from 'react-native-paper';
import Header from '../../components/header/Header'


class bill extends React.Component {

  // LOGICSUBMIT
  // aksiSubmit = async () => {
  //   if (this.state.textTblNumber != '') {
  //     await AsyncStorage.setItem('noMeja', `${this.state.textTblNumber}`)
  //     //Tambah Data table transaction (Just a tableNumber)
  //     await this.props.dispatch(addTransaction({
  //       tableNumber: this.state.textTblNumber,
  //       isPaid: false
  //     }))
  //     await AsyncStorage.setItem('idTransaction', `${this.props.Transaction.dataItem.data.id}`)
  //     await this.props.navigation.navigate('StackPrivate')
  //   } else {
  //     alert('Masukan Nomor Meja Terlebih Dahulu')
  //   }
  // }
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center' }}>
          03 September 2019: 20:31{'\n'}
        </Text>
        <View style={styles.containerx}>
          <Card style={styles.card}>
            <CardItem style={{ flexDirection: 'row', alignItems: 'space-between' }}>
              <Body>
                <View style={{ flexDirection: 'row', alignItems: 'space-between', width: null, height: 105 }}>
                  <Image source={require('../../asset/logo.jpg')}
                    style={{ width: 100, height: 105, position: 'absolute', borderRadius: 10 }} />
                  <Text style={{ fontWeight: 'bold', fontSize: 20, paddingLeft: 110, position: 'absolute' }}>
                    Table No: 50
                </Text>
                </View>
                {/* title */}
                <View style={{ flexDirection: 'row', alignItems: 'space-between', position: 'absolute',paddingLeft: 10, paddingTop: 30, }}>
                  <Text style={{ fontSize: 13, paddingLeft: 100, fontWeight:'bold' }}>
                   OCUBANN JAV-RESTOURANT
                </Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'space-between', position: 'absolute', paddingTop: 45 }}>
                  <Text style={{ fontSize: 13, paddingLeft: 110 }}>
                  Guests are The Top Priority
                </Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'space-between', position: 'absolute', paddingTop: 70, paddingLeft: 110 }}>
                  <Button style={{ backgroundColor: '#e67e22' }}>
                    <Text style={{ fontSize:15,fontWeight:'bold',color:'white' }}>COMPLAIN</Text>
                  </Button>
                  <Button 
                  onPress={() => {
                      this.props.navigation.navigate('Home')}}
                  style={{ backgroundColor: '#e67e22',marginLeft:20 }}>
                    <Text style={{ fontSize:15,fontWeight:'bold',color:'white' }}>DELETE</Text>
                  </Button>
                </View>
        <View
          style={{
            backgroundColor: '#e67e22',
            height: 1,
            width: '100%',
            marginVertical: 15,
          }}></View>
        <View style={{ flexDirection: 'row', alignItems: 'space-between' }}>
          <Text
            style={{
              fontSize: 17,
              fontWeight: 'bold',
              textAlign: 'center',
              color: '#e67e22',
              marginLeft: 15,
            }}>
            Waiting
        </Text>
          <Text style={{ fontSize: 17, textAlign: 'center', marginLeft: 15 }}>
            Onigiri
        </Text>
          <Text style={{ fontSize: 17, textAlign: 'center', marginLeft: 15 }}>
            Rp 128.900
        </Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'space-between' }}>
          <Text
            style={{
              fontSize: 17,
              fontWeight: 'bold',
              textAlign: 'center',
              color: '#e67e22',
              marginLeft: 80,
            }}>
            
        </Text>
          <Text style={{ fontSize: 17, textAlign: 'center', marginLeft: 15 }}>
            Sake
        </Text>
          <Text style={{ fontSize: 17, textAlign: 'center', marginLeft: 20 }}>
            Rp 50.000
        </Text>
        </View>
        <View
          style={{
            backgroundColor: '#e67e22',
            height: 1,
            width: '100%',
            marginVertical: 15,
          }}></View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'space-between',
            backgroundColor: '#e67e22',
            height: 130,
            width: '100%',
            borderRadius: 5,
          }}>
          <View style={{ flex: 1 }}>
            <Text style={styles.bill}>Discount</Text>
            <Text style={styles.bill}>Service Charge(5.5%)</Text>
            <Text style={styles.bill}>Tax(10%)</Text>
            <Text
              style={{
                textAlign: 'left',
                marginVertical: 5,
                marginHorizontal: 15,
                fontWeight: 'bold',
              }}>
              Total
          </Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.bill}>Rp.0</Text>
            <Text style={styles.bill}>Rp.1.500</Text>
            <Text style={styles.bill}>Rp.17.890</Text>
            <Text
              style={{
                textAlign: 'left',
                marginVertical: 5,
                marginHorizontal: 15,
                fontWeight: 'bold',
                color: 'white'
              }}>
              Rp. 192.000
          </Text>
          </View>
        </View>

        <View
          style={{
            backgroundColor: '#e67e22',
            height: 1,
            width: '100%',
            marginVertical: 15,
          }}></View>

        <View style={{ flexDirection: 'row', alignItems: 'space-between' }}>
          <Button
            mode="contained"
            color="#e67e22"
            style={{width: '50%', marginLeft:100}}
            onPress={() => {
              this.props.navigation.navigate('EndRe')}}>

            <Text style={{ color: 'white', fontSize: 18,fontWeight:'bold'}}>CASHIER</Text>
          </Button>
        </View>
              </Body>
            </CardItem>
          </Card>
        </View>
        
      </View>
    );
  }
}

export default bill;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    width: '100%',
    alignItems: 'center',
  },
  card: {
    marginTop: 20
  },
  container: {
    padding: 15,
    flex: 1
  },
  Button: {
    width: 100,
    height: 40,
    backgroundColor: 'white'}
    ,
  bill: {
    textAlign: 'left',
    marginVertical: 5,
    marginHorizontal: 15,
    color: 'white'
  },
});
