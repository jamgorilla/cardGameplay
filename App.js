import React from 'react';
import { Component, Image, Stylesheet, PanResponder, Dimensions, StyleSheet, Text, Animated, View } from 'react-native';
import Card from './Card.js';

export default class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
        position  : [{
        position    : 'absolute',
        top         : 360,
        left        : 0,
    },{
        position    : 'absolute',
        top         : 360,
        left        : 35,
    },{
        position    : 'absolute', 
        top         : 360,
        left        : 70,
    },{
        position    : 'absolute',
        top         : 360,
        left        : 105,
    },{
        position    : 'absolute',
        top         : 360,
        left        : 140,
    },{
        position    : 'absolute', 
        top         : 360,
        left        : 175,
    },{
        position    : 'absolute', 
        top         : 360,
        left        : 210,
    },{
        position    : 'absolute', 
        top         : 360,
        left        : 245,
    },{
        position    : 'absolute', 
        top         : 70,
        left        : 0,
    }],

    hand : [1, 30, 3, 43, 5, 6, 47, 52] ,
    deck : [50]
    };

    
}

renderDraggable(){
    let _this = this;
    let eighth;
    if (_this.state.hand.length > 7) {
      eighth = <Card position={_this.state.position[7]} hand={_this.state.hand[7]}/> ;
    }

    return (
        <View>
            <Card position={_this.state.position[0]} hand={_this.state.hand[0]}/>
            <Card position={_this.state.position[1]} hand={_this.state.hand[1]}/>
            <Card position={_this.state.position[2]} hand={_this.state.hand[2]}/>
            <Card position={_this.state.position[3]} hand={_this.state.hand[3]}/>
            <Card position={_this.state.position[4]} hand={_this.state.hand[4]}/>
            <Card position={_this.state.position[5]} hand={_this.state.hand[5]}/>
            <Card position={_this.state.position[6]} hand={_this.state.hand[6]}/>
            {eighth}
            <Card position={_this.state.position[8]} hand={_this.state.deck[0]}/>
        </View>
    );
}
   render(){
        return (
            <View style={styles.mainContainer}>
                <View style={styles.dropZone}>
                    <Text style={styles.text}>Header</Text>
                </View>

                {this.renderDraggable()}
            </View>
        );
    }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

let CIRCLE_RADIUS = 36;
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
    circle      : {
        width               : 72,
        height              : 70
    }
});
