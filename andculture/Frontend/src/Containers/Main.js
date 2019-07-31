import React, { Component } from 'react';
// import { withRouter } from 'react-router-dom'
import BreweryList from './BreweryList'


class Main extends Component {

  render (){
    // console.log(this.props)
    return (
      <div>
        <BreweryList breweries={this.props.breweries}/>
      </div>
    )
  }
}

export default Main
