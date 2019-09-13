import * as React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Button, Text } from 'react-native-paper';

class bill extends React.Component {
    constructor() {
        super();
        this.state = {
            checked: false
        };
    }
    render() {
        return (
            <View style={{ flexDirection: 'row', alignItems: 'space-between' }}>
                <Text
                    style={styles.status}>
                    Status
                   </Text>
                <View style={{ flex: 2 }}>
                    <Text style={styles.menu}>
                        Menu
                  </Text>
                </View>
                <View style={{ flex: 1 }}>
                    <Text style={styles.menu}>
                        Qty
                  </Text>
                </View>
                <View style={{ flex: 2 }}>
                    <Text style={styles.menu}>
                        Price
                    </Text>
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
    menu: {
        fontSize: 17,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    status: {
        fontSize: 17,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#e67e22',
        marginLeft: 15,
    },
});
