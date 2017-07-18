import React, {Component} from 'react';
import { Image, Stylesheet, PanResponder, Dimensions, StyleSheet, Text, Animated, View } from 'react-native';
//import Images from './assets/playingcards/images.js';

export default class RageQuit extends Component {
  constructor(props){
    super(props);    
  }

   render(){
        return (
            <View>
            <button></button>
            </View>
        );
    }

}



let Window = Dimensions.get('window');
let styles = StyleSheet.create({
    mainContainer: {
        flex    : 1
    },
    dropZone    : {
        height         : 100,
        backgroundColor:'#2c3e50'
    },
    text        : {
        marginTop   : 25,
        marginLeft  : 5,
        marginRight : 5,
        textAlign   : 'center',
        color       : '#fff'
    },
    draggableContainer: {
        position    : 'absolute',
        top         : 20,
        left        : 20,
    },
    circle      : {
        width               : 90,
        height              : 100
    }
});
