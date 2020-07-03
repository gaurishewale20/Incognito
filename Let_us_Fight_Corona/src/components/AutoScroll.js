import React from "react";
import { withRouter } from "react-router-dom";
import { Switch, Route, Redirect } from 'react-router-dom';
import About from '../components/AboutComponent/AboutComponent';
import Resources from '../components/AboutComponent/Resources';
import Credits from '../components/AboutComponent/Credits';
import Test from './Test';
import Result from './Result';
import FAQs from './FAQs/faqs';
import Help from './Helpline/Help';
import Essentials from './Essentials/Essentials';
import Symptoms from './Symptoms/Symptoms';
import Dashboard from './Dashboard/Dashboard';
import Precautions from './Precautions/Precautions';
import Process from './Procedure/Process';
import Home from './HomeComponent';

class AutoScroll extends React.Component
{
    componentDidUpdate ( prevProps )
    {
        if (
            this.props.location.pathname !== prevProps.location.pathname
        )
        {
            window.scrollTo( 0, 0 );
        }
    }

    render ()
    {
        return (
            <Switch >

                <Route path='/home' component={ () => <Home /> } />
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
                <Route exact path="/credits" component={ () => <Credits /> } />
                <Route exact path="/resources" component={ () => <Resources /> } />
                <Redirect to="/home" />
            </Switch>
        );
    }

}
export default withRouter( AutoScroll );