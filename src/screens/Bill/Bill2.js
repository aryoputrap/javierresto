import React, { Component } from 'react';
import { Card, CardItem, Body, Tab, Tabs, Text, Container, TabHeading, Content } from 'native-base';
import { StyleSheet, View, StatusBar, Headers, TouchableOpacity, FlatList, Alert, Image } from 'react-native';

import { connect } from "react-redux"
import HeaderBill from '../../components/header/HeaderBill'
import HeaderBill2 from '../../components/header/HeaderBill2'
import ListBill from './listBill'

class Home extends Component {

    constructor() {
        super();
        this.state = {
            checked: false
        };
    }

    manggilCallback = () => {
        this.setState({ checked: !this.state.checked });
        let semuaDataOrder = this.props.Order.dataItemTmp
        const indexObjOrder = semuaDataOrder.findIndex((item) => {
            if (item.menuId == this.props.itemNya.menuId) {
                return item
            }
        })
        semuaDataOrder[indexObjOrder] = {
            ...semuaDataOrder[indexObjOrder],
            status: !this.state.checked
        }
        this.props.callBackNya()
        // console.warn(semuaDataOrder)
    }
    Nominal = nominal => {
        const reverse = nominal
            .toString().split("").reverse().join("");
        const ribuan = reverse.match(/\d{1,3}/g);
        const hasil = ribuan
            .join(".").split("").reverse().join("");
        return hasil;
    };

    render() {
        return (
            <View style={styles.container}>

                <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center' }}>
                    03 September 2019: 20:31{'\n'}
                </Text>
                <View style={styles.containerx}></View>
                <Card style={styles.card}>
                    <CardItem style={{ flexDirection: 'row', alignItems: 'space-between' }}>
                        <Body>
                            {/* <HeaderBill navigation={this.props.navigation} /> */}
                            <View style={styles.garis1} />

                        </Body>
                    </CardItem>
                </Card>
            </View>

        );
    }
}

const mapStatePros = (state) => {
    return {
        Order: state.Order
    }
}
export default connect(mapStatePros)(Home)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 3,
        width: '100%',
        alignItems: 'center',
    },
    total: {
        textAlign: 'left',
        marginVertical: 5,
        marginHorizontal: 15,
        fontWeight: 'bold',
        color: 'white'
    },
    roll: {
        height: "37%",
        width: "100%",
    },
    stretch: {
        width: "100%",
    },
    garis1: {
        backgroundColor: '#e67e22',
        height: 1,
        width: '100%',
        marginVertical: 13,
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
    card: {
        marginTop: 5
    },
    container: {
        padding: 15,
        flex: 1
    },
    Button: {
        width: 100,
        height: 40,
        backgroundColor: 'white'
    },
    bill: {
        textAlign: 'left',
        marginVertical: 5,
        marginHorizontal: 15,
        color: 'white'
    },
});