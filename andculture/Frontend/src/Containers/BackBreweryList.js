import React, { Component } from 'react';
// import { withRouter } from 'react-router-dom'
import { Search, Form } from 'semantic-ui-react'

import BackBreweries from '../Components/BackBreweries'


class BackBreweryList extends Component {
  state = {
    search: ""
  }

  handleSearch = (e, {value}) => {
    this.setState({search: value})
  }

  render (){

    const filteredBreweries = this.props.breweries.filter(brewery =>{
      return brewery.name.toLowerCase().includes(this.state.search.toLowerCase())
    })

    return (
      <div>
        <center>
          <Search width={16} onSearchChange={this.handleSearch} placeholder="Search By Name" showNoResults={false}/>
        </center>
        <div>
        <br />
        <div className="accordion">
          {filteredBreweries.map(brewery =>(
            <BackBreweries key={brewery.id} deleteBreweries={this.props.deleteBreweries} fetchBreweries={this.props.fetchBreweries} name={brewery.name} id={brewery.id} city={brewery.city} brewery_type={brewery.brewery_type} country={brewery.country} latitude={brewery.latitude} longitude={brewery.longitude} phone={brewery.phone} postal={brewery.postal_code} street={brewery.street} website_url={brewery.website_url}/>
          ))}
        </div>
      </div>
    </div>
    )
  }
}

export default BackBreweryList
