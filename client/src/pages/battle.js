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
        this.firstFiveCards()
    }
   
   

    firstFiveCards = () =>{
        let myHand = this.state.cardsInHand
        if(myHand.length < 5){

            let randomCard = image[Math.floor(Math.random()*image.length)];
            if (!myHand.includes(randomCard)){
                // console.log(randomCard)
                   myHand.push(randomCard);
                   this.setState({
                       cardsInHand: myHand
                    });
                    
                }
                this.firstFiveCards();
           }
           console.log(this.state.cardsInHand);
        }
    

    render() {
        
            // console.log(this.state.firebaseData);
            // console.log( this.state.cardsInHand);
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