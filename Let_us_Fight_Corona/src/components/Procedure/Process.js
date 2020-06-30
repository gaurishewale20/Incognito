import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles( ( theme ) => ( {
    root: {
        width: '100%',

    },
    button: {
        marginTop: theme.spacing( 1 ),
        marginRight: theme.spacing( 1 ),
    },
    actionsContainer: {
        marginBottom: theme.spacing( 2 ),
    },
    resetContainer: {
        padding: theme.spacing( 3 ),
    },
} ) );

function getSteps ()
{
    return [ 'When to suspect the possibility of Corona ?', 'What to do then ?', 'What document is required for Corona-testing?', 'What to do if I turn out to be COVID-19 +ve patient? ',
        'What about family members of the patient?', 'Where will I get more Help ?' ];
}

function getStepContent ( step )
{
    switch ( step )
    {
        case 0:
            return `If you are not responding to your family doctor treatment for more than 3 days - `;
        case 1:
            return `Visit Municipal /Government Hospital and get yourself checked by the doctors present.`;
        case 2:
            return `Get the COVID-19 (RT-CPR) testing letter from the government doctor. After that , you can take the  test in government hospital or private labs. `;
        case 3:
            return `If you do turn COVID-19 +ve in test report, inform the local PHC (Primary Health Centre)/Medical Officer of your area.
       Your must quarantine in Government Quarantine Centres or Private Hospital followed by 14 days home quarantine`;
        case 4:
            return `The family members should avoid contact with the COVID-19 patient and shift him/her promtly to hospital.If the family members are asymtomatic(i.e show NO signs of Corona disease), there is no need of Corona testing for them.`;
        case 5:
            return `You will get more help from the Community Clinics- Freely available in your area and from the helpline numbers provided from our website.`
        default:
            return 'Unknown step';
    }
}

export default function Process ()
{
    const classes = useStyles();
    const [ activeStep, setActiveStep ] = React.useState( 0 );
    const steps = getSteps();

    const handleNext = () =>
    {
        setActiveStep( ( prevActiveStep ) => prevActiveStep + 1 );
    };

    const handleBack = () =>
    {
        setActiveStep( ( prevActiveStep ) => prevActiveStep - 1 );
    };

    const handleReset = () =>
    {
        setActiveStep( 0 );
    };

    return (
        <div className="Process">
            <div className="row">

                <div className="col-12 text-left">
                    <h3>Process</h3>

                </div>
            </div>
            <div className={ classes.root }>
                <Stepper activeStep={ activeStep } orientation="vertical">
                    { steps.map( ( label, index ) => (
                        <Step key={ label }>
                            <StepLabel><h5>{ label }</h5></StepLabel>
                            <StepContent>
                                <Typography><h6>{ getStepContent( index ) }</h6></Typography>
                                <div className={ classes.actionsContainer }>
                                    <div>
                                        <Button
                                            disabled={ activeStep === 0 }
                                            onClick={ handleBack }
                                            className={ classes.button }
                                        >
                                            Back
                  </Button>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            onClick={ handleNext }
                                            className={ classes.button }
                                        >
                                            { activeStep === steps.length - 1 ? 'Finish' : 'Next' }
                                        </Button>
                                    </div>
                                </div>
                            </StepContent>
                        </Step>
                    ) ) }
                </Stepper>
                { activeStep === steps.length && (
                    <Paper square elevation={ 0 } className={ classes.resetContainer }>
                        <Typography><h5>All steps completed - We hope that you found this information helpful.</h5></Typography>
                        <Button onClick={ handleReset } className={ classes.button }>
                            <h6> Read Again</h6>
                        </Button>
                    </Paper>
                ) }
            </div>
            <br />
        </div>
    );
}
