import React from "react";
//import docR from "./../image/images/doc1.jpg"
function Result ( { score, Retake } )
{
    var message;
    if ( `${ score }` < 1 )
    {
        message = "Comparitively you are safer.";
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
        message = "You are at high risk. Take Care and Stay at home. Consult Doctor immediately.";
    }
    return (
        <div className="score-board  p-5">
            <div className="score-card row align-items-center p-5">
                { message }</div><br />
            <div >
                < button className="playBtn" onClick={ Retake }>
                    Retake the Test!
        </button></div>
        </div> );

}



export default Result;