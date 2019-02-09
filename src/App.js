import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Header,Home,About,Work,Stats,Blog,Footer } from './components';

class App extends Component {
  render() {
    return (

    <div className="App">
        <Header/>
        <Home/>
        <About/>
        <Work/>
        <Footer/>

    </div>

    );
  }
}

export default App;
