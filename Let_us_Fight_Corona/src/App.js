import React, { Component } from 'react';
import ResponsiveDrawer from './components/Navbar';
import "./App.css";
import { BrowserRouter } from 'react-router-dom';
import LoadingPage from './components/LoadingPage';

class App extends Component
{
  state = {
    loading: true
  }
  componentDidMount = () =>
  {
    setTimeout( () =>
    {
      this.setState( {
        loading: false
      } )
    }, 4500 )
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
