import React from 'react';
import { Component, Image, Stylesheet, PanResponder, Dimensions, StyleSheet, Text, Animated, View } from 'react-native';
import Card from './Card.js';
import Deck from './Deck.js';
import Bottom from './Bottom.js';

export default class App extends React.Component {
  constructor(props){
    super(props);

   this.originPos = [{
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
        top         : 50,
        left        : 0,
    }]

    this.state = {
        position  : this.originPos,

    hand : [1, 30, 3, 43, 5, 6, 47],
    deck : [50]
    };

    this.dropCardToDeck = this.dropCardToDeck.bind(this);
    this.pickUpDeckCard = this.pickUpDeckCard.bind(this);
    this.reOrderHand = this.reOrderHand.bind(this);
}

dropCardToDeck(droppedCard, callback){

  let _this = this;
  let newArray = [];

  let index = _this.state.hand.indexOf(droppedCard)
  let newHand = _this.state.hand.splice(index, 1)

  _this.setState({
    hand : _this.state.hand,
    deck : [droppedCard]
  })

 callback();
}

pickUpDeckCard(deckCard, handPositionVar){
  let _this = this;
  _this.state.hand.splice(handPositionVar, 0, deckCard)  

  _this.setState({
    hand: _this.state.hand,
    deck : []
  })
}

reOrderHand(pickedCard, handPositionVar){
  let _this = this;
  let pindex = _this.state.hand.indexOf(pickedCard)

  _this.state.hand.splice(pindex, 1)


  _this.state.hand.splice(handPositionVar, 0, pickedCard)  

  var tempHand = _this.state.hand



var moo = function() {
  _this.setState({
    position: _this.originPos
  }, function() { 
    _this.setState({
      hand: tempHand
    });
  });
}

moo()

 
  console.log('empty?', _this.state.hand)




  console.log('full', _this.state.hand)
}


renderDraggable(){
    let _this = this;
    let eighth;
    if (_this.state.hand.length > 7) {
      eighth = <Card position={_this.state.position[7]} hand={_this.state.hand[7]}/> ;
    }

    return (
        <View>
            <Card reOrderHand={ _this.reOrderHand } dropCardToDeck={ _this.dropCardToDeck } position={_this.state.position[0]} hand={_this.state.hand[0]}/>
            <Card reOrderHand={ _this.reOrderHand } dropCardToDeck={ _this.dropCardToDeck } position={_this.state.position[1]} hand={_this.state.hand[1]}/>
            <Card reOrderHand={ _this.reOrderHand } dropCardToDeck={ _this.dropCardToDeck } position={_this.state.position[2]} hand={_this.state.hand[2]}/>
            <Card reOrderHand={ _this.reOrderHand } dropCardToDeck={ _this.dropCardToDeck } position={_this.state.position[3]} hand={_this.state.hand[3]}/>
            <Card reOrderHand={ _this.reOrderHand } dropCardToDeck={ _this.dropCardToDeck } position={_this.state.position[4]} hand={_this.state.hand[4]}/>
            <Card reOrderHand={ _this.reOrderHand } dropCardToDeck={ _this.dropCardToDeck } position={_this.state.position[5]} hand={_this.state.hand[5]}/>
            <Card reOrderHand={ _this.reOrderHand } dropCardToDeck={ _this.dropCardToDeck } position={_this.state.position[6]} hand={_this.state.hand[6]}/>
            {eighth}
           <Bottom position={_this.state.position[8]}/>
            <Deck pickUpDeckCard={ _this.pickUpDeckCard } position={_this.state.position[8]} hand={_this.state.deck[0]}/>
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
