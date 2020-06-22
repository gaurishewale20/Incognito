import { withStyles } from "@material-ui/styles";
import React from "react";
import styles from "../styles/CardsStyles";
import "../styles/Home"
import { Link } from "react-router-dom"
//This is for Home Component Card Layout

function Cards ( { title, src, classes, content, link } )
{
    return (
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

    );
}

export default withStyles( styles )( Cards );
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
*/