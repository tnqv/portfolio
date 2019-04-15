import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Header,Home,About,Work,Stats,Blog,Footer } from './components';

class App extends Component {
  render() {
    return (
          <MuiThemeProvider>
              <div className="App">
                  <Header/>
                  <Home/>
                  <About/>
                  {/* <Blog/> */}
                  <Work/>
                  <Footer/>
                  {/* <Stats/> */}

              </div>
            </MuiThemeProvider>


    );
  }
}

export default App;
