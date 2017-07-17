import React, {Component} from 'react';
import { Image, Stylesheet, PanResponder, Dimensions, StyleSheet, Text, Animated, View } from 'react-native';
//import Images from './assets/playingcards/images.js';

export default class Card extends Component {
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
        

           console.log('gesture X', gesture.moveX)
           console.log('gesture Y', gesture.moveY)
            console.log('this state pan', this.state.pan)
          let Xcoord = JSON.stringify(this.state.pan.x)
          let Xcord = JSON.parse(Xcoord)

          let Ycoord = JSON.stringify(this.state.pan.y)
          let Ycord = JSON.parse(Ycoord)

          console.log('X', Xcord)
          console.log('Y', Ycord)

          if (gesture.moveX < 50 && gesture.moveY < 200) {
            console.log('table')
              Animated.spring(            //Step 1
                this.state.pan,         //Step 2
                {toValue:{x:-100,y:-300}}     //Step 3
            ).start();

              // replace dropped card with deck card remove from hand
              this.props.dropCardToDeck(this.props.hand);

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
  let _this = this;
  let card;
  if (_this.props.hand === 1) {
  card = <Image style={styles.circle}
                resizeMode='contain' 
                source={require('./card-images/2H.png')} />
  } else if (_this.props.hand === 2) {
  card = <Image style={styles.circle}
                resizeMode='contain'  
                source={require('./card-images/2S.png')} />
  } else if (_this.props.hand === 3) {
  card = <Image style={styles.circle}
                resizeMode='contain' 
                source={require('./card-images/2C.png')} />
  } else if (_this.props.hand === 4) {
  card = <Image style={styles.circle}
                resizeMode='contain' 
                source={require('./card-images/2D.png')} />
  } else if (_this.props.hand === 5) {
  card = <Image style={styles.circle}
                resizeMode='contain' 
                source={require('./card-images/3H.png')} />
  } else if (_this.props.hand === 6) {
  card = <Image style={styles.circle}
                resizeMode='contain' 
                source={require('./card-images/3S.png')} />
  } else if (_this.props.hand === 7) {
  card = <Image style={styles.circle}
                resizeMode='contain' 
                source={require('./card-images/3C.png')} />
  } else if (_this.props.hand === 8) {
  card = <Image style={styles.circle}
                resizeMode='contain' 
                source={require('./card-images/3D.png')} />
  } else if (_this.props.hand === 9) {
  card = <Image style={styles.circle}
                resizeMode='contain' 
                source={require('./card-images/4H.png')} />
  } else if (_this.props.hand === 10) {
  card = <Image style={styles.circle}
                resizeMode='contain' 
                source={require('./card-images/4C.png')} />
  } else if (_this.props.hand === 11) {
  card = <Image style={styles.circle}
                resizeMode='contain' 
                source={require('./card-images/4S.png')} />
  } else if (_this.props.hand === 12) {
  card = <Image style={styles.circle}
                resizeMode='contain' 
                source={require('./card-images/4D.png')} />
  } else if (_this.props.hand === 13) {
  card = <Image style={styles.circle}
                resizeMode='contain' 
                source={require('./card-images/5H.png')} />
  } else if (_this.props.hand === 14) {
  card = <Image style={styles.circle}
                resizeMode='contain' 
                source={require('./card-images/5C.png')} />
  } else if (_this.props.hand === 15) {
  card = <Image style={styles.circle}
                resizeMode='contain' 
                source={require('./card-images/5S.png')} />
  } else if (_this.props.hand === 16) {
  card = <Image style={styles.circle}
                resizeMode='contain' 
                source={require('./card-images/5D.png')} />
  } else if (_this.props.hand === 17) {
  card = <Image style={styles.circle}
                resizeMode='contain' 
                source={require('./card-images/6H.png')} />
  } else if (_this.props.hand === 18) {
  card = <Image style={styles.circle}
                resizeMode='contain' 
                source={require('./card-images/6C.png')} />
  } else if (_this.props.hand === 19) {
  card = <Image style={styles.circle}
                resizeMode='contain' 
                source={require('./card-images/6S.png')} />
  } else if (_this.props.hand === 20) {
  card = <Image style={styles.circle}
                resizeMode='contain' 
                source={require('./card-images/6D.png')} />
  } else if (_this.props.hand === 21) {
  card = <Image style={styles.circle}
                resizeMode='contain' 
                source={require('./card-images/7H.png')} />
  } else if (_this.props.hand === 22) {
  card = <Image style={styles.circle}
                resizeMode='contain' 
                source={require('./card-images/7C.png')} />
  } else if (_this.props.hand === 23) {
  card = <Image style={styles.circle}
                resizeMode='contain' 
                source={require('./card-images/7S.png')} />
  } else if (_this.props.hand === 24) {
  card = <Image style={styles.circle}
                resizeMode='contain' 
                source={require('./card-images/7D.png')} />
  } else if (_this.props.hand === 25) {
  card = <Image style={styles.circle}
                resizeMode='contain' 
                source={require('./card-images/8H.png')} />
  } else if (_this.props.hand === 26) {
  card = <Image style={styles.circle}
                resizeMode='contain' 
                source={require('./card-images/8C.png')} />
  } else if (_this.props.hand === 27) {
  card = <Image style={styles.circle}
                resizeMode='contain' 
                source={require('./card-images/8S.png')} />
  } else if (_this.props.hand === 28) {
  card = <Image style={styles.circle}
                resizeMode='contain' 
                source={require('./card-images/8D.png')} />
  } else if (_this.props.hand === 29) {
  card = <Image style={styles.circle}
                resizeMode='contain' 
                source={require('./card-images/9H.png')} />
  } else if (_this.props.hand === 30) {
  card = <Image style={styles.circle}
                resizeMode='contain' 
                source={require('./card-images/9C.png')} />
  } else if (_this.props.hand === 31) {
  card = <Image style={styles.circle}
                resizeMode='contain' 
                source={require('./card-images/9S.png')} />
  } else if (_this.props.hand === 32) {
  card = <Image style={styles.circle}
                resizeMode='contain' 
                source={require('./card-images/9D.png')} />
  } else if (_this.props.hand === 33) {
  card = <Image style={styles.circle}
                resizeMode='contain' 
                source={require('./card-images/10H.png')} />
  } else if (_this.props.hand === 34) {
  card = <Image style={styles.circle}
                resizeMode='contain' 
                source={require('./card-images/10C.png')} />
  } else if (_this.props.hand === 35) {
  card = <Image style={styles.circle}
                resizeMode='contain' 
                source={require('./card-images/10S.png')} />
  } else if (_this.props.hand === 36) {
  card = <Image style={styles.circle}
                resizeMode='contain' 
                source={require('./card-images/10D.png')} />
  } else if (_this.props.hand === 37) {
  card = <Image style={styles.circle}
                resizeMode='contain' 
                source={require('./card-images/JH.png')} />
  } else if (_this.props.hand === 38) {
  card = <Image style={styles.circle}
                resizeMode='contain' 
                source={require('./card-images/JC.png')} />
  } else if (_this.props.hand === 39) {
  card = <Image style={styles.circle}
                resizeMode='contain' 
                source={require('./card-images/JS.png')} />
  } else if (_this.props.hand === 40) {
  card = <Image style={styles.circle}
                resizeMode='contain' 
                source={require('./card-images/JD.png')} />
  } else if (_this.props.hand === 41) {
  card = <Image style={styles.circle}
                resizeMode='contain' 
                source={require('./card-images/QH.png')} />
  } else if (_this.props.hand === 42) {
  card = <Image style={styles.circle}
                resizeMode='contain' 
                source={require('./card-images/QC.png')} />
  } else if (_this.props.hand === 43) {
  card = <Image style={styles.circle}
                resizeMode='contain' 
                source={require('./card-images/QS.png')} />
  } else if (_this.props.hand === 44) {
  card = <Image style={styles.circle}
                resizeMode='contain' 
                source={require('./card-images/QD.png')} />
  } else if (_this.props.hand === 45) {
  card = <Image style={styles.circle}
                resizeMode='contain' 
                source={require('./card-images/KH.png')} />
  } else if (_this.props.hand === 46) {
  card = <Image style={styles.circle}
                resizeMode='contain' 
                source={require('./card-images/KC.png')} />
  } else if (_this.props.hand === 47) {
  card = <Image style={styles.circle}
                resizeMode='contain' 
                source={require('./card-images/KS.png')} />
  } else if (_this.props.hand === 48) {
  card = <Image style={styles.circle}
                resizeMode='contain' 
                source={require('./card-images/KD.png')} />
  } else if (_this.props.hand === 49) {
  card = <Image style={styles.circle}
                resizeMode='contain' 
                source={require('./card-images/AH.png')} />
  } else if (_this.props.hand === 50) {
  card = <Image style={styles.circle}
                resizeMode='contain' 
                source={require('./card-images/AC.png')} />
  } else if (_this.props.hand === 51) {
  card = <Image style={styles.circle}
                resizeMode='contain' 
                source={require('./card-images/AS.png')} />
  } else if (_this.props.hand === 52) {
  card = <Image style={styles.circle}
                resizeMode='contain' 
                source={require('./card-images/AD.png')} />
  }

    return (
        <View style={_this.props.position}>
            <Animated.View 
                {...this.panResponder.panHandlers}                       
                style={[this.state.pan.getLayout(), styles.circle]}>  
                
                <View>{card}</View>
                
            </Animated.View>
            
        </View>
    );
}

   render(){
        return (
            <View style={styles.mainContainer}>
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
