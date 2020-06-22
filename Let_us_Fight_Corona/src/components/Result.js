import React from "react";
import docR from "./../image/images/doc1.jpg"

const Result = ( { msg, Retake } ) => (

    <div className="score-board row justify-content-center p-4" style={ { backgroundImage: `url(${ docR })`, backgroundSize: "cover" } }>
        <div className="result" style={ { color: "white", fontSize: "2rem", top: "5rem" } }>{ msg }</div>
        <button className="playBtn" onClick={ Retake }>
            Retake the Test!
        </button>
    </div>

);



export default Result;