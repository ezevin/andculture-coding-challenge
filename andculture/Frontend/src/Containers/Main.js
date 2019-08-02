import React, { Component } from 'react';
// import { withRouter } from 'react-router-dom'
import { Button, Form, Grid } from 'semantic-ui-react'

import BreweryList from './BreweryList'
import BackBreweryList from './BackBreweryList'



class Main extends Component {
  state = {
    active: true,
    name: "",
    city: "",
    brewery_type: "",
    country: "",
    latitude: "",
    longitude: "",
    phone: "",
    postal_code: "",
    street: "",
    website_url: ""
  }

  toggle = (e) => {
    if (e.target.value === "API"){
      this.setState({active: true})
    }else{
      this.setState({active: false})
    }
  }

  handleChange = (e, {name}) => {
    const target = e.target.name
    const value = e.target.value
    console.log("target", target, "value", value);
    if (target === 'name'){
      this.setState({name: value})
    } else if (target ==="city"){
      this.setState({city: value})
    } else if (target ==="brewery_type"){
      this.setState({brewery_type: value})
    } else if (target ==="country"){
      this.setState({country: value})
    } else if (target ==="latitude"){
      this.setState({latitude: value})
    }else if (target ==="longitude"){
      this.setState({longitude: value})
    } else if (target ==="phone"){
        this.setState({phone: value})
    } else if (target ==="postal_code"){
        this.setState({postal_code: value})
    } else if (target ==="street"){
        this.setState({street: value})
    } else if (target ==="website_url"){
        this.setState({website_url: value})
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { name, city, brewery_type, country,latitude, longitude, phone, postal_code, street, website_url } = this.state
    fetch(`http://localhost:3000/breweries`, {
          method: "POST",
          headers: {
            Accept: 'application/json',
            'Content-type': 'application/json'
          },
          body: JSON.stringify({ name, city, brewery_type, country,latitude, longitude, phone, postal_code, street, website_url })
        })
        .then(res=>res.json())
        .then(data => {this.setState(data)})
        .then(()=> this.props.fetchBreweries())
  }

  render (){
    return (
      <div>
        <center>
          <Button.Group color="brown">
            <Button value="API" onClick={this.toggle}>API</Button>
            <Button.Or />
            <Button value="Backend" onClick={this.toggle}>Backend</Button>
          </Button.Group><br /><br />
        </center>
        {this.state.active ?
          <BreweryList breweries={this.props.breweries}/>
          :
          <>
          <Form className="form" onSubmit={this.handleSubmit}>
            <Grid>
              <Grid.Column  width={5} className="">
                <label>Brewery Name:</label>
                 <Form.Input  placeholder='Brewery Name' name="name"  onChange={this.handleChange} />
                 <label>Street:</label>
                 <Form.Input placeholder='Street'  name="street" onChange={this.handleChange} />
                 <label>Postal Code:</label>
                 <Form.Input placeholder='Postal Code' name="postal_code" onChange={this.handleChange} />
                 <label>Website URL:</label>
                 <Form.Input float="center" placeholder='Website URL...' name='website_url' onChange={this.handleChange}/>
              </Grid.Column>
              <Grid.Column width={5} className="">
                <label>Brewery Type:</label>
                <Form.Input placeholder='Brewery Type'  name="brewery_type" onChange={this.handleChange} />
                 <label>City:</label>
                 <Form.Input placeholder='City' name="city" onChange={this.handleChange} />
                 <label>Latitude:</label>
                 <Form.Input placeholder='Latitude' name="latitude" onChange={this.handleChange} />
             </Grid.Column>
             <Grid.Column width={5} className="">
               <label>Phone Number:</label>
               <Form.Input float="center" placeholder='Phone Number' name='phone' onChange={this.handleChange}/>
               <label>Country:</label>
               <Form.Input placeholder='Country' name="country" onChange={this.handleChange} />
               <label>Longitude:</label>
               <Form.Input placeholder='Longitude' name="longitude" onChange={this.handleChange} />
                <Button size="large" type='submit'>Submit</Button>
            </Grid.Column>
            </Grid>
          </Form><br />
          <BackBreweryList deleteBreweries={this.props.deleteBreweries} fetchBreweries={this.props.fetchBreweries} breweries={this.props.backBreweries}/>
          </>
        }
      </div>
    )
  }
}

export default Main
