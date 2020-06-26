import React, { Component } from 'react';
import quizService from "./quizService";
import QuestionBox from "../components/QuestionBox/QuestionBox";
import Result from "../components/Result";



class Test extends Component
{
    state = {
        questionBank: [],
        score: 0,
        responses: 0,
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

    };
    Retake = () =>
    {
        this.getQuestions();
        this.setState( {
            score: 0,
            responses: 0,
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

                    <div className="col-12">
                        <br />
                        { this.state.responses === 4 ? ( <h3>Results</h3> ) : ( <h3>Test</h3> ) }
                    </div>
                    <div className="alert alert-warning alert-dismissible fade show" role="alert">
                        <strong>Hello viewer!</strong> This is a very basic test and we urge you to seek medical help immediately if you are unwell.
                        Please answer the following questions honestly to get truthful result.
                                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
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
                        <Result score={ this.state.score } Retake={ this.Retake } /> ) : null }
                    <br />
                </div>

            </div>

        )
    }
}

export default Test;