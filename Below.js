import React, {Component} from 'react';
import { Image, Stylesheet, PanResponder, Dimensions, StyleSheet, Text, Animated, View } from 'react-native';
//import Images from './assets/playingcards/images.js';

export default class Below extends Component {
  constructor(props){
    super(props); 
    };

renderDraggable(){
  let _this = this;

  return (
    <View style={_this.props.position}>
      <Image style={styles.circle}
        resizeMode='contain' 
        source={_this.props.hand} />
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



let styles = StyleSheet.create({
    mainContainer: {
        flex    : 1
    },
    circle      : {
        width   : 90,
        height  : 100
    }
});
