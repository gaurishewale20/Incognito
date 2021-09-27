import React, { Component } from 'react';
import ResponsiveDrawer from './components/Navbar';
import "./App.css";
import { BrowserRouter } from 'react-router-dom';
import LoadingPage from './components/LoadingPage';

class App extends Component
{
  constructor ( props )
  {
    super( props );
    this.state = {
      loading: true,
    }
  }

  componentDidMount = () =>
  {
    this.interval = setTimeout( () =>
    {
      this.setState( {
        loading: false,
      } )
    }, 1000 )
  }
  componentWillUnmount ()
  {
    clearTimeout( this.interval );
  }
  render ()
  {
    return (

      <BrowserRouter>
        <div className="App ">
          { this.state.loading ? <LoadingPage /> : <ResponsiveDrawer /> }
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
