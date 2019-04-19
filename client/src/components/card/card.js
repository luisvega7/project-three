import React from "react";
import "./style.css";
import { createReadStream } from "fs";

function Card(props) {
    return (

        <div id="playerCard">
            <div className="card-body">
                <h5 className="card-title" >{props.playerName}</h5>
                <p className="card-text" >{props.title}</p>
                <hr></hr>
                <img alt={props.img} src={props.img} className="card-img-top" alt="card"></img>
            </div>
            <div className="card-footer">
                <small className="text-muted">Health: {props.health} | Attack: {props.attack}</small>
            </div>
        </div>


    )

}

export default Card;