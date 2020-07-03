import React, { Component } from 'react';



import Cards from './Cards';

import Graph from './../image/gifs/graph.gif';
import Csymptoms from './../image/gifs/coronasymptoms.gif';
import testg from './../image/gifs/testgiphy.gif';
import Prevention from './../image/gifs/prevention.gif';
import Mask1 from './../image/images/mask1.jpg';
import help from './../image/gifs/support.gif';

//import AutoScroll from './AutoScroll';


class Home extends Component
{


    render ()
    {



        const gifIcons = [
            { src: `${ Graph }`, title: "Statewise Graph Dashboard", content: "Want to know more about current situation? Click to get detailed statewise reports and graphs!", link: "./dashboard" },
            { src: `${ Mask1 }`, title: "Essential commodities", content: "Can't find essential items?... Get links to online suppliers of masks and sanitizer with just a click!", link: "./essentials" },
            { src: `${ Prevention }`, title: "Preventive Measures", content: "Follow these 5 rules of prevention for good health!", link: "./precautions" },

            { src: `${ Csymptoms }`, title: "Symptoms of Covid-19", content: "Take a quick look and get to know if you show any symptoms!", link: "./symptoms" },
            { src: `${ testg }`, title: "Health Test", content: "Feeling queasy? Click to take a quick health test!", link: "./test" },
            { src: `${ help }`, title: "Helpline", content: "Facing any problems? Need any sort of help? Click to get helpline numbers!", link: "./help" },
        ];
        //  const { classes } = this.props;
        return (
            <div className=" container-fluid ">

                <div className="row">
                    { gifIcons.map( ( s, i ) => (
                        <Cards
                            key={ i }
                            src={ s.src }
                            title={ s.title }
                            content={ s.content }
                            link={ s.link }
                        />
                    ) ) }

                </div>


            </div>
        );






    }
}

export default Home;