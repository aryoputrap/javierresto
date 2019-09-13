import * as React from 'react';
import { View, StyleSheet, Image,TouchableOpacity } from 'react-native';
import { Button, Text } from 'react-native-paper';

class bill extends React.Component {
  constructor() {
    super();
    this.state = {
      checked: false
    };
  }

  render() {
    const { checked } = this.state;
    const isEnable = checked == !false;
    return (
        <View>
                <View style={{ flexDirection: 'row', alignItems: 'space-between', width: null, height: 105 }}>
                  <Image source={require('../../asset/logo.jpg')}
                    style={{ width: 100, height: 105, position: 'absolute', borderRadius: 10 }} />
                  <Text style={{ fontWeight: 'bold', fontSize: 20, paddingLeft: 110, position: 'absolute' }}>
                    Table No: 50
                </Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'space-between', position: 'absolute', paddingLeft: 10, paddingTop: 30 }}>
                  <Text style={{ fontSize: 13, paddingLeft: 100, fontWeight: 'bold' }}>
                    OCUBANN JAVIER-RESTOURANT
                </Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'space-between', position: 'absolute', paddingTop: 45 }}>
                  <Text style={{ fontSize: 13, paddingLeft: 110 }}>
                    Guests are The Top Priority
                </Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'space-between', position: 'absolute', paddingTop: 70, paddingLeft: 110 }}>
                  <Button style={{ backgroundColor: '#e67e22' }}>
                    <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'white' }}>COMPLAIN</Text>
                  </Button>
                  <Button
                    onPress={() => {
                      this.props.navigation.navigate('Home')
                    }}
                    style={{ backgroundColor: '#e67e22', marginLeft: 20 }}>
                    <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'white' }}>DELETE</Text>
                  </Button>
                </View>
        
      </View>
    );
  }
}
const mapStatePros = (state) => {
  return {
    Order: state.Order
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
  status: {
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#e67e22',
    marginLeft: 15,
  },
  card: {
    marginTop: 20
  },
  container: {
    padding: 15,
    flex: 1
  },
  bill: {
    textAlign: 'left',
    marginVertical: 5,
    marginHorizontal: 15,
    color: 'white'
  },
});
