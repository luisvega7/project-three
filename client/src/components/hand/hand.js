import React from "react";
import Card from "../card";
import image from '../../image.json';
import "./style.css";

class Hand extends React.Component {
    state = {
        //Set state to image.json
       image,
       
   }

    render() {
        return (

        <div className="container" id="hand">
        <p>The player's hand</p>
        <div className="card-group row">
        {this.state.image.map((cards, index) =>(
                    <div className='col-sm-3' key={index}>
                        <Card
                        playerName={cards.playerName}
                        title={cards.title}
                        img={cards.img}
                        health={cards.health}
                        attack={cards.attack}
                        />
                        <hr></hr>
                    </div>                     
                    ))}
                    </div>
        </div>
        )
    }
}
export default Hand;