import React, {Component} from 'react';
import {Modal, Text, TouchableHighlight,TouchableOpacity,View,Dimensions,StyleSheet, Alert} from 'react-native';
import { CardItem, Card} from 'native-base';

export default class YesModal extends Component{
    constructor(props){
        super(props);
        this.state={
                width:Dimensions.get('window').width,
        };
        Dimensions.addEventListener('change',(e)=>{
            this.setState(e.window);
        });

    }

    closeModal=()=>{
        this.props.changeModalVisibility(false)
    }
    
    render() {
        return(
            <TouchableOpacity activeOpacity={1} disable={true} style={styles.contentContainer}>
                <View style={[styles.modal,{width:this.state.width-200}]}>
                    <View style={styles.textView}>
                        <Text style={[styles.text1,{fontSize:15}]}>Confirm Order</Text>
                        <Text style={styles.text2}>You are sure for this order?</Text>
                    </View>
                </View>
                <View style={styles.buttonView}>
                    <TouchableHighlight onPress={()=>this.closeModal} style={styles.touchablelight} underlayColor={'#f1f1f1'}>
                        <Text style={[styles.cancel,{color:'black'}]}>Cancel</Text>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={()=>this.closeModal} style={styles.touchablelight} underlayColor={'#f1f1f1'}>
                        <Text style={[styles.ok,{color:'black'}]}>OK</Text>
                    </TouchableHighlight>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    contentContainer:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    modal:{
        height:80,
        paddingTop:10,
        alignItems:'center',
        alignSelf:'center',
        textAlign:'center',
        backgroundColor:'#D3D3D3'
    },
    text: {
        textAlign:'center',
        margin:5,
        fontSize:16,
        fontWeight:'bold'
    },
    text1: {
        textAlign:'center',
        margin:5,
        fontSize:14,
        fontWeight:'bold'
    },
    text2: {
        textAlign:'center',
        margin:5,
        fontSize:16,
        fontWeight:'bold'
    },
    cancel:{
        textAlign:'center',
        margin:5,
        marginTop:15,
        fontSize:16,
        marginLeft:10,
        marginBottom:20,
        fontWeight:'bold'
    },
    ok:{
        textAlign:'center',
        margin:5,
        marginTop:15,
        fontSize:16,
        marginLeft:10,
        marginBottom:20,
        fontWeight:'bold'
    },
    touchablelight:{
        flex:1,
        backgroundColor:'#D3D3D3',
        paddingVertical:1,
        alignSelf:'stretch',
    },
    textView:{
        flex:0.5,
    },
    buttonView:{
        width:'100%',
        flexDirection:'row',
        paddingLeft:100,
        paddingRight:100
    }

})