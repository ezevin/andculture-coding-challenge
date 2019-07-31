import React, { Component } from 'react';
// import { withRouter } from 'react-router-dom'
import { Search } from 'semantic-ui-react'

import Breweries from '../Components/Breweries'


class BreweryList extends Component {
  state = {
    search: "",
    country: ""
  }

  handleSearch = (e, {value}) => {
    this.setState({search: value})
    console.log(value)
  }

  render (){
    // console.log(this.props.breweries);
    const filteredBreweries = this.props.breweries.filter(brewery =>{
      return brewery.name.toLowerCase().includes(this.state.search.toLowerCase())
    })
    // const city = this.props.breweries.map(brewery => brewery.city )
    // console.log(city);
    return (
      <div>
        <Search width={16} onSearchChange={this.handleSearch} placeholder="Search By Name" showNoResults={false} />
        <br />
        {filteredBreweries.map(brewery =>(
          <Breweries key={brewery.id} name={brewery.name} city={brewery.city} type={brewery.brewery_type} country={brewery.country} latitude={brewery.latitude} longitude={brewery.longitude} phone={brewery.phone} postal={brewery.postal_code} street={brewery.street} url={brewery.website_url}/>
        ))}
      </div>
    )
  }
}

export default BreweryList
// <Dropdown clearable fluid multiple search selection options={} placeholder='Select City'/><br />
