import React, { Component } from "react";
import Score from "../components/scoreBar";
import Stage from "../components/playingField";
import Hand from "../components/hand";
import image from '../../src/image.json'; //remove once database is connected, this is for testing purposes only
import { databaseBase, firebase } from '../base'
import { SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS } from "constants";

class Battle extends Component {

    state = {
        image,
        player1Health: 1000,
        player2Health: 1000,
        timer: 0,
        cardDeckOne: 0, //# of cards still in the in deck
        cardDeckTwo: 0,
        cardsInHand: [], //current cards in players hand
        cardsUsed: [],  //cards user has already played
        firebaseData: [],
        playerOneExists: false,
        playerTwoExists: false,
        key:" "//assign playerOne or playerTwo as key value for battle
    };
    componentDidMount() {
        databaseBase.syncState('/game', {
            context: this,
            state: 'firebaseData',
            asArray: true,
            keepKeys: true,
        });
    }
   
    drawCard = () =>{
       //this function will draw one random card from the users deck into their hand to play after a card is played from the 5 in hand cards
       //use this function to loop 5 times at the start of the game to generate the 5 starting cards
       //We will then loop through the cardsInHand array in the Hand component to display the cards to the battle page
       //Also, this is not working correctly or at all at the moment
        let randomCards = image.splice(Math.floor(Math.random()*image.length));
        
        this.setState({cardsInHand: [...this.state.cardsInHand, ...randomCards]})
        
             
    };
    firstFiveCards = () =>{

        for(let i = 0; i < 5; i++){
           
        }
    }

    render() {
        
            console.log(this.state.firebaseData);
            console.log( this.state.cardsInHand);
            return (
                <div>
                    <h2>Battle Page</h2>
                    <hr></hr>
                    <Score player1Health={this.state.player1Health} player2Health={this.state.player2Health} cardDeckOne={this.state.cardDeckOne} cardDeckTwo={this.state.cardDeckTwo} timer={this.state.timer} />
                    <br></br>
                    <Stage />
                    <Hand />
                </div>
            )
        }
    }

    export default Battle;