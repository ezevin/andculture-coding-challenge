import React, { Component } from 'react';

import './App.css';

import Main from './Containers/Main'

class App extends Component{
  state = {
    breweries: [],
    backBreweries: [],
    names: [],
    showing: []
  }

  componentDidMount(){

    fetch(`https://api.openbrewerydb.org/breweries`)
    .then(res => res.json())
    .then(data => this.setState({breweries: data}))

    fetch(`http://localhost:3000/breweries`)
    .then(res => res.json())
    .then(data => this.setState({backBreweries: data}))

  }

  fetchBreweries = () => {
    fetch(`http://localhost:3000/breweries`)
    .then(res => res.json())
    .then(data => this.setState({backBreweries: data}))
  }

  deleteBreweries = (id) => {
    fetch(`http://localhost:3000/breweries/${id}`, {
      method:"delete"
    })
    .then(() =>this.fetchBreweries())
  }

  render (){

    return (
      <div className="background">
        <div className="title">
          <center>
            <h1 className="head">Tapped Out</h1>
            <h2 className="subHead">Brought to you By andCulture</h2>
          </center>
        </div>
          <Main breweries={this.state.breweries} backBreweries={this.state.backBreweries} fetchBreweries={this.fetchBreweries}
          deleteBreweries={this.deleteBreweries}/>
        <p align="right" className="footer"> ©Elizabeth Zevin</p>
      </div>
    );
  }
}

export default App;
