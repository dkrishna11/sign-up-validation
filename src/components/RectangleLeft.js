import React from "react";
import abstarctionsignup from "../Abstractionsign-up.png"
import "./RectangleLeft.css"

function RectangleLeft(){

    return (
        <div className="left">
            <p>Find 3D Objects, Mockups and Ilustration here</p>
            <div className="image">
            <img src={abstarctionsignup} alt="signup-logo"></img>
            </div>
        </div>
    );
}

export default RectangleLeft;