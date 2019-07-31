import React, { Component } from 'react';
// import { Route, withRouter } from 'react-router-dom'
import './App.css';

import Main from './Containers/Main'

class App extends Component{
  state = {
    breweries: [],
    names: []
  }

  componentDidMount(){
    fetch(`https://api.openbrewerydb.org/breweries`)
    .then(res => res.json())
    .then(data => this.setState({breweries: data}))


  }

  render (){
    // console.log(this.state.breweries)
    return (
      <div>
        <center>
          <h1>Tapped Out</h1>
          <h2>Brought To You By andCulture</h2>
        </center>
          <Main breweries={this.state.breweries}/>
        <p align="right"> ©Elizabeth Zevin</p>
      </div>
    );
  }
}

export default App;
