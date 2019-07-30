import React, { Component } from 'react';
import './App.css';

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
    console.log(this.state.breweries)
    let name = this.state.breweries.map(brewery => {
      return brewery.name
    })
    let city = this.state.breweries.map(brewery => {
      return brewery.city
    })
    let brewery_type = this.state.breweries.map(brewery => {
      return brewery.brewery_type
    })
    let country = this.state.breweries.map(brewery => {
      return brewery.country
    })
    let latitude = this.state.breweries.map(brewery => {
      return brewery.latitude
    })
    let longitude = this.state.breweries.map(brewery => {
      return brewery.longitude
    })
    let phone = this.state.breweries.map(brewery => {
      return brewery.phone
    })
    let postal_code = this.state.breweries.map(brewery => {
      return brewery.postal_code
    })
    let street = this.state.breweries.map(brewery => {
      return brewery.street
    })
    let url = this.state.breweries.map(brewery => {
      return brewery.website_url
    })



    return (
      <div>
        <ul>
          <li>names: {name}</li>
          <li>cities: {city}</li>
          <li>brewery_type: {brewery_type}</li>
          <li>country: {country}</li>
          <li>latitude: {latitude}</li>
          <li>longitude: {longitude}</li>
          <li>phone: {phone}</li>
          <li>postal_code: {postal_code}</li>
          <li>street: {street}</li>
          <li>url: {url}</li>
        </ul>
      </div>
    );
  }
}

export default App;
