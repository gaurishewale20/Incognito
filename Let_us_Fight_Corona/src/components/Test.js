import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import quizService from "./quizService";
import QuestionBox from "../components/QuestionBox/QuestionBox";
import Result from "../components/Result";



import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

class Test extends Component
{
    state = {
        questionBank: [],
        score: 0,
        responses: 0,
        msg: " "
    };
    getQuestions = () =>
    {
        quizService().then( question =>
        {
            this.setState( {
                questionBank: question
            } );
        } );
    };
    computeAnswer = ( answer, correctAnswer ) =>
    {
        if ( answer === correctAnswer )
        {
            this.setState( {
                score: this.state.score + 1,
            } );

        }
        this.setState( {
            responses: this.state.responses < 4 ? this.state.responses + 1 : 4
        } );
        if ( this.state.responses === 3 )
        {
            if ( this.state.score === 0 )
            {
                this.setState( {
                    msg: "Don't worry you are safe.",
                } );
            }
            else if ( this.state.score === 1 )
            {
                this.setState( {
                    msg: "You are at low risk. Take Care and Stay at home. ",
                } );
            }

            else if ( this.state.score === 2 )
            {
                this.setState( {
                    msg: "You are at risk. Take Care and Stay at home.",
                } );
            }
            else 
            {
                this.setState( {
                    msg: "You are at high risk. Take Care and Stay at home. Consult Doctor",
                } );
            }

        }

    };
    Retake = () =>
    {
        this.getQuestions();
        this.setState( {
            score: 0,
            responses: 0,
            msg: " "
        } );
    }
    componentDidMount ()
    {
        this.getQuestions();
    }
    render ()
    {
        return (
            <div className="container-fluid">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem >Test</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        { this.state.responses === 4 ? ( <h3>Results</h3> ) : ( <h3>Test</h3> ) }
                        <hr />
                    </div>

                </div>



                <div className="row">
                    { this.state.questionBank.length > 0 &&
                        this.state.responses < 4
                        && this.state.questionBank.map(
                            ( { question, correct, options, id } ) => (
                                <QuestionBox
                                    question={ question }
                                    options={ options }
                                    key={ id }
                                    selected={ answer => this.computeAnswer( answer, correct ) } />
                            )
                        ) }
                    { this.state.responses === 4 ? (
                        <Result msg={ this.state.msg } Retake={ this.Retake } /> ) : null }
                    <p />
                </div>

            </div>

        )
    }
}

export default Test;