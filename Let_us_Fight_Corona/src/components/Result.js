import React from "react";
import docR from "./../image/images/doc1.jpg"
function Result ( { score, Retake } )
{
    var message;
    if ( `${ score }` < 1 )
    {
        message = "Don't worry you are safe.";
    }
    else if ( `${ score }` < 2 )
    {
        message = "You are at low risk. Take Care and Stay at home. ";
    }
    else if ( `${ score }` < 3 ) 
    {
        message = "You are at risk. Take Care and Stay at home.";
    }
    else 
    {
        message = "You are at high risk. Take Care and Stay at home. Consult Doctor immediately";
    }
    return (
        <div className="score-board row row-content p-5" style={ { backgroundImage: `url(${ docR })`, backgroundSize: "cover" } }>
            <div className="score-card" style={ { color: "white", fontSize: "1.5rem" } }>
                { message }</div>
            <span >
                < button className="playBtn" onClick={ Retake }>
                    Retake the Test!
        </button></span>
        </div> );

}



export default Result;