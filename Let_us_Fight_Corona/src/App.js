import React, { Component } from 'react';
import ResponsiveDrawer from './components/Navbar';
import "./App.css";
import { BrowserRouter } from 'react-router-dom';

class App extends Component
{

  render ()
  {
    return (

      <BrowserRouter>
        <div className="App">
          <ResponsiveDrawer />
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
