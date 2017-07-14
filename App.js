import React from 'react';
import { Component, Image, Stylesheet, PanResponder, Dimensions, StyleSheet, Text, Animated, View } from 'react-native';

export default class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
        pan     : new Animated.ValueXY()   //Step 1
    };

    this.panResponder = PanResponder.create({    
        onStartShouldSetPanResponder : () => true,
        onPanResponderMove           : Animated.event([null,{ 
            dx : this.state.pan.x,
            dy : this.state.pan.y
        }]),
        onPanResponderRelease        : (e, gesture) => {
          Animated.spring(            //Step 1
            this.state.pan,         //Step 2
            {toValue:{x:0,y:0}}     //Step 3
        ).start();
        } 
    });
}

renderDraggable(){
    return (
        <View style={styles.draggableContainer}>
            <Animated.View 
                {...this.panResponder.panHandlers}                       
                style={[this.state.pan.getLayout(), styles.circle]}>     
                <Image
                  style={styles.circle}
                  source={{uri: 'https://allaboutcards.files.wordpress.com/2009/11/200px-playing_card_spade_a_svg_small1.png'}}
                />
            </Animated.View>
        </View>
    );
}
   render(){
        return (
            <View style={styles.mainContainer}>
                <View style={styles.dropZone}>
                    <Text style={styles.text}>Drop me here!</Text>
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
    draggableContainer: {
        position    : 'absolute',
        top         : Window.height/2 - CIRCLE_RADIUS,
        left        : Window.width/2 - CIRCLE_RADIUS,
    },
    circle      : {
        width               : CIRCLE_RADIUS*2,
        height              : 90
    }
});
