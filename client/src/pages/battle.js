import React, { Component } from "react";
import Score from "../components/scoreBar";
import Stage from "../components/playingField";
import Hand from "../components/hand";
<<<<<<< HEAD
import { databaseBase, firebase } from '../base'
=======
import {databaseBase, firebase} from '../base'
>>>>>>> 050c0b52a6573e88ccacdbf1d1c4b87ed4b6c507

class Battle extends Component {

    state = {
        cards: [],
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
    battleClick = event => {
        event.preventDefault();
        console.log("clicked");
        
    }

    render() {
            console.log(this.state.firebaseData);
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