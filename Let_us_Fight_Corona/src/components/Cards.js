//import { withStyles } from "@material-ui/styles";
import React from "react";
//import styles from "../styles/CardsStyles";
//import "../styles/Home"
import { Link } from "react-router-dom";
import "../styles/card-style.css";
//This is for Home Component Card Layout


function Cards ( { title, src, classes, content, link } )
{
    return (
        <div className="homecards col-md-6  ">
            <Link className="tags"
                style={ {
                    color: "default",
                    textDecoration: "none"
                } } to={ link }>
                <div className="card text-center" >
                    <div className="container-fluid">
                        <img src={ src } alt={ title } className="card-img-top" />
                    </div>
                    <div className="card-body text-body">
                        <h4 className="card-title">{ title }</h4>
                        <p className="card-text text-dark">{ content }</p>
                    </div>
                </div>
            </Link>
            <br />
        </div>

    );
}

export default Cards;
/* Alternative Path
 <div>
            <Card>
                <CardBody>
                    <CardTitle>{ title }</CardTitle>
                    <CardSubtitle>Card subtitle</CardSubtitle>
                </CardBody>
                <img width="100%" src={ src } alt="Card image cap" />
                <CardBody>
                    <CardText>{ content }</CardText>
                </CardBody>
            </Card>
        </div>
///
////
/////
<div className={ classes.card } >
            <Link className="tags"
                style={ {
                    color: "default",
                    textDecoration: "none"
                } } to={ link }>
                <h2 className={ classes.cardTitle }>{ title }</h2>
                <img src={ src } alt={ title } className={ classes.cardImage } />
                <br />
                <h4 className={ classes.cardContent }>{ content }</h4>
            </Link>
        </div>
        */