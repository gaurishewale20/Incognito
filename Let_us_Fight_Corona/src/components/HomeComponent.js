import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import About from '../components/AboutComponent/AboutComponent';
import Test from './Test';
import Result from './Result';
import FAQs from './FAQs/faqs';
import Help from './Helpline/Help';
import Cards from './Cards';
import Essentials from './Essentials/Essentials';
import Symptoms from './Symptoms/Symptoms';
import Dashboard from './Dashboard/Dashboard';
import Precautions from './Precautions/Precautions';
import Graph from './../image/gifs/graph.gif';
import Csymptoms from './../image/gifs/coronasymptoms.gif';
import testg from './../image/gifs/testgiphy.gif';
import Prevention from './../image/gifs/prevention.gif';
import Mask1 from './../image/images/mask1.jpg';
import help from './../image/gifs/support.gif';
import Process from './Procedure/Process';
//import { CSSTransition, TransitionGroup } from 'react-transition-group';

class Home extends Component
{

    render ()
    {

        const HomePage = () =>
        {
            const gifIcons = [
                { src: `${ Graph }`, title: "Statewise Graph Dashboard", content: "Want to know more about current situation? Click to get detailed statewise reports and graphs!", link: "./dashboard" },
                { src: `${ Mask1 }`, title: "Essential commodities", content: "Can't find essential items?... Get links to online suppliers of masks and sanitizer with just a click!", link: "./essentials" },
                { src: `${ Prevention }`, title: "Preventive Measures", content: "Follow these 5 rules of prevention for good health!", link: "./precautions" },

                { src: `${ Csymptoms }`, title: "Symptoms of Covid-19", content: "Take a quick look and get to know if you are suffering from this or not", link: "./symptoms" },
                { src: `${ testg }`, title: "Health Test", content: "Feeling queasy? Click to take a quick health test!", link: "./test" },
                { src: `${ help }`, title: "Helpline", content: "Facing any problems? Need any sort of help? Click to get helpline numbers!", link: "./help" },
            ];
            //  const { classes } = this.props;
            return (
                <div className="home container-fluid ">
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

        // Specifying the routes for our various pages
        return (

            <Switch >
                <Route path='/home' component={ HomePage } />
                <Route exact path="/dashboard" component={ () => <Dashboard /> } />
                <Route exact path="/test" component={ () => <Test /> } />
                <Route exact path="/result" component={ () => <Result /> } />
                <Route exact path="/faqs" component={ () => <FAQs /> } />
                <Route exact path="/symptoms" component={ () => <Symptoms /> } />
                <Route exact path="/precautions" component={ () => <Precautions /> } />
                <Route exact path="/process" component={ () => <Process /> } />

                <Route exact path="/help" component={ () => <Help /> } />
                <Route exact path="/essentials" component={ () => <Essentials /> } />
                <Route exact path="/aboutus" component={ () => <About /> } />
                <Redirect to="/home" />
            </Switch>


        );
    }
}

export default Home;