import React, { Component } from 'react';
// import { Route, withRouter } from 'react-router-dom'
import './App.css';

import Main from './Containers/Main'

class App extends Component{
  state = {
    breweries: [],
    newBreweries: [],
    allBreweries: [],
    names: []
  }

  componentDidMount(){
    fetch(`https://api.openbrewerydb.org/breweries`)
    .then(res => res.json())
    .then(data => this.setState({breweries: data}))

    fetch(`http://localhost:3000/breweries`)
    .then(res => res.json())
    .then(data => this.setState({newBreweries: data}))

    this.state.breweries.map(brewery => {
      this.state.newBreweries.map(brew => {
        let allBreweries = []
        allBreweries.push(brewery, brew)
        return allBreweries
      })
    })
    // this.setState({allBreweries: (this.state.breweries, this.state.newBreweries).join()})

  }

  render (){
    console.log(this.state.breweries)
    console.log(this.state.newBreweries);
    console.log(this.state.allBreweries);
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
