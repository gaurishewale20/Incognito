# Let's Fight Corona

### Team name: Incognito

## Team members
* Gauri V Shewale - gvshewale_b19@ce.vjti.ac.in
* Piyusha S Bharambe - psbharambe_b19@it.vjti.ac.in
* Vaishnavi Bhadrashette - vvbhadrashette_b19@ce.vjti.ac.in
* Meera Wadher - mbwadher_b19@ce.vjti.ac.in

## Mentors
* Aditya Patkar
* Archeel Parekh

## Description
A real-time COVID-19 Dashboard equipped with all the information regarding Symptoms,Precautions,etc and a quick basic health test.

The website offers various features as follows:
- Daily Data visualisation for Indian States, Union Territories and the country
- Symptoms
- Precautions
- Health Test
- FAQs
- Process(COVID-19 Management )
- Helpline (For Indian States, Union Territories and wards in Mumbai)
- Essentials

The important concepts used in this website are as follows: 

* Single Page Application 

Package used: "react-router-dom"

                ..
                import { Switch, Route, Redirect } from 'react-router-dom';
                ...
                ..
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


* Daily Data fetching 

Package used: "axios"

        async componentDidMount ()
    {

        const { data } = await axios.get( 'https://api.covid19india.org/data.json' );
        const india_values = data.statewise[ 0 ];
        const subset = {
            confirmed: india_values.confirmed,
            recovered: india_values.recovered,
            active: india_values.active,
            deaths: india_values.deaths
        };


        this.setState( { data: data, subset: subset } )
        return ( { subset } )
    }
    
* React Hooks (For search filter in Helplines)

                    import React, { useState } from 'react';
                    ...
                    ...
                    const Help = () =>
                          {
                              const [ search, setSearch ] = useState( '' );
                              const filteredSearch = HelplineNumbers.filter( s =>
                              {
                                  return s.statename.toLowerCase().includes( search.toLowerCase() )
                              }
                              )
                              ..
                           
                    return  (      
                    <div className={ styles.search_option }>
                        <SearchIcon />
                        <input type="text" placeholder=" Search " onChange={ e => setSearch( e.target.value ) } />
                     </div>
                     ..
                     )
                     }



* GitHub repo link: [Link to repository](https://github.com/gaurishewale20/Incognito.git)
* Drive link: [Drive link here](https://drive.google.com/)
* Website link: [Website link here](https://letusfightcorona.netlify.app)

## Technology stack
We used 

HTML, CSS, Bootstrap - Front-End
Framework- React Js

## Project Setup

>You can download or simply clone this repository for setting up this project

## Applications
>As we all know, the COVID-19 pandemic is a global health crisis that has changed the world and this will go down as one of the historic moments of all time. We've been in lockdown for weeks now, and it's essential that we keep up with the latest news about this pandemic and keep ourselves and our loved ones safe.So, we've created a Real-Time Corona Virus Dashboard with essential information that might be useful to you.

>You can take a basic health test and go through all the symptoms,preventions listed on the site

## Future scope
>We plan to work more on Data visualizations and integrating Google Maps API for providing location based options for purchasing essentials..

## Few glimpses of Website

![Screenshot alt text](https://edtimes.in/wp-content/uploads/2018/09/NikeMeme10-640x633.jpg "Here is a screenshot")




