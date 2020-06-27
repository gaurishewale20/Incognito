import React from "react";
import { CardLink } from 'reactstrap';
import essentialmask from '../../image/images/mask.png';
import sanitizer from '../../image/images/sanitizer.png';
import gloves from '../../image/images/gloves.png';
import dairy from '../../image/images/dairy.png';
import grocery from '../../image/images/grocery.png'

function Essentials ()
{
    const pics = [
        {
            src: `${ essentialmask }`, title: "Buy Face Masks Here", id: 1,

            link1: "https://www.amazon.in/Masks-Respirators/b?ie=UTF8&node=8452605031", hlink1: "Buy on Amazon",
            link2: "https://www.myntra.com/mask", hlink2: "Buy on Myntra",
            link3: "https://www.flipkart.com/masks-store?otracker=undefined_footer_footer", hlink3: "Buy on FlipKart",
            link4: "https://www.fabindia.com/collection/face-masks", hlink4: "Buy on Fabindia",
        },
        {
            src: `${ sanitizer }`, title: "Buy Sanitizer Here", id: 2,
            link1: "https://www.amazon.in/Hand-Sanitizers/b?ie=UTF8&node=4264053031", hlink1: "Buy on Amazon",
            link2: "https://www.myntra.com/sanitizer", hlink2: "Buy on Myntra",
            link3: "https://www.flipkart.com/q/hand-sanitizer", hlink3: "Buy on FlipKart",
            link4: "https://www.nykaa.com/personal-care/hands-and-feet/hand-sanitizer/c/385", hlink4: "Buy on Nykaa",
        },
        {
            src: `${ gloves }`, title: "Buy Gloves Here", id: 3,

            link1: "https://www.amazon.in/Medical-Apparel-Gloves/b?ie=UTF8&node=6395533031", hlink1: "Buy on Amazon",
            link2: "https://www.myntra.com/hand-gloves", hlink2: "Buy on Myntra",
            link3: "https://www.flipkart.com/industrial-scientific-supplies/safety-products/safety-gloves/pr?sid=gsx%2Cbfk%2C9fn", hlink3: "Buy on FlipKart",
            link4: "https://paytmmall.com/kitchen-gloves-glpid-26563", hlink4: "Buy on PaytmMall",
        },
        {
            src: `${ grocery }`, title: "Buy Grocery Here", id: 4,

            link1: "https://www.bigbasket.com/", hlink1: "Buy on Big Basket",
            link2: "https://www.amazon.in/Gourmet-Specialty-Foods/b?ie=UTF8&node=2454178031", hlink2: "Buy on Amazon",
            link3: "https://www.flipkart.com/grocery-supermart-store?marketplace=GROCERY", hlink3: "Buy on FlipKart",
            link4: "https://paytmmall.com/provision-store-clpid-5409?src=store&from=storefront&use_sf=1", hlink4: "Buy on PaytmMall",
        },
        {
            src: `${ dairy }`, title: "Buy Dairy Products Here", id: 5,

            link1: "https://www.bigbasket.com/pc/bakery-cakes-dairy/dairy/", hlink1: "Buy on Big Basket",
            link2: "https://awesomedairy.com/", hlink2: "Buy on Awesomedairy",
            link3: "https://www.dmart.in/dairy-products", hlink3: "Buy on Dmart",
            link4: "https://paytmmall.com/fmcg-dairy-products-glpid-101484", hlink4: "Buy on PaytmMall",
        }

    ];
    return (

        <div className="container-fluid">
            <div className="row row-content  align-items-center">
                { pics.map( ( i, s ) => (


                    <div key={ s } className="homecards col-md-6">

                        <div className="card text-center " >
                            <div className="container-fluid ">
                                <img src={ i.src } alt={ i.title } className="card-img-top" />
                            </div>
                            <div className="card-body text-dark">
                                <h4 className="card-title">{ i.title }</h4>
                                <div className="card-text text-secondary">
                                    <ul type="none">
                                        <li><CardLink href={ i.link1 }>{ i.hlink1 }</CardLink></li>
                                        <li><CardLink href={ i.link2 }>{ i.hlink2 }</CardLink></li>
                                        <li><CardLink href={ i.link3 }>{ i.hlink3 }</CardLink></li>
                                        <li><CardLink href={ i.link4 }>{ i.hlink4 }</CardLink></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <p />
                    </div>

                ) ) }
            </div>
        </div>


    );
}

export default Essentials;

/*
 <Card style={ { marginBottom: '2rem' } }>
                            <CardImg width="100%" src={ i.src } alt="Card image cap" />
                            <CardTitle color="primary" style={ { margin: "1rem " } }>{ i.title }</CardTitle >

                            <CardBody >
                                <ul key={ i.id } type="none">
                                    <li><CardLink href={ i.link1 }>{ i.hlink1 }</CardLink></li>
                                    <li><CardLink href={ i.link2 }>{ i.hlink2 }</CardLink></li>
                                    <li><CardLink href={ i.link3 }>{ i.hlink3 }</CardLink></li>
                                    <li><CardLink href={ i.link4 }>{ i.hlink4 }</CardLink></li>
                                </ul>
                            </CardBody>
                        </Card>*/