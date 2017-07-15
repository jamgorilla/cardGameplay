import React, {Component} from 'react';
import { Image, Stylesheet, PanResponder, Dimensions, StyleSheet, Text, Animated, View } from 'react-native';


export default class Card extends Component {
  constructor(props){
    super(props);
    this.state = {
        pan     : new Animated.ValueXY()   //Step 1
    };
    
  
   //let _this = this;
   

    this.panResponder = PanResponder.create({    
        onStartShouldSetPanResponder : () => true,
        onPanResponderMove           : Animated.event([null,{ 
            dx : this.state.pan.x,
            dy : this.state.pan.y
        }]),
        onPanResponderRelease        : (e, gesture) => {

          let Xcoord = JSON.stringify(this.state.pan.x)
          let Xcord = JSON.parse(Xcoord)

          let Ycoord = JSON.stringify(this.state.pan.y)
          let Ycord = JSON.parse(Ycoord)

          console.log('X', Xcord)
          console.log('Y', Ycord)

          if (Xcord < -100 && Ycord < -130) {
            console.log('table')
              Animated.spring(            //Step 1
                this.state.pan,         //Step 2
                {toValue:{x:-100,y:-300}}     //Step 3
          

            ).start();
          } else {
            console.log('not table')
              Animated.spring(            //Step 1
                this.state.pan,         //Step 2
                {toValue:{x:0,y:0}}     //Step 3
            ).start();
          }


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
        top         : 20,
        left        : 20,
    },
    circle      : {
        width               : 90,
        height              : 100
    }
});
