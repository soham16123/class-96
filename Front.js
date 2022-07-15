import React ,{Component }from 'react';
import { Text,View, StyleSheet,Image,TouchableOpacity,TextInput } from 'react-native';
import calender from 'react-calender'
import {Card} from'react-native-paper';
import {RFvalue}from'react-native-reponsive-fontsize';

export default class Front extends Components{
    contructor(){
        super()
        this.state={
            name:''
        }
    }
    render()    {
        return(
        <view style={styles.container}>

        <Card style ={style.card} > 
        what's your name?
        
        </Card>  
        </view>
        )
    } 
}