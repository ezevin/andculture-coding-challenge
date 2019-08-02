import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import { Container, Grid, Header, Button, Form, Modal } from 'semantic-ui-react'
// import { withRouter } from 'react-router-dom'
import BreweryType from '../Forms/BreweryType'
import City from '../Forms/City'
import Country from '../Forms/Country'
import Phone from '../Forms/Phone'
import PostalCode from '../Forms/PostalCode'
import Street from '../Forms/Street'
import WebsiteURL from '../Forms/WebsiteURL'

// API_KEY = bootstrapURLKeys
const AnyReactComponent = ({ text }) => <div>{text}</div>

class BackBreweryCard extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  }



  render (){
    // console.log(this.props);
    const { brewery_type, phone, street, city, country, postal, website_url, latitude, longitude, id, name} = this.props


    return (
      <div>
        <Grid>
          <Grid.Column width={11}>
            <Container className="info">
              <Header as="h3">Brewery Type:
                <BreweryType id={id} brewery_type={brewery_type} fetchBreweries={this.props.fetchBreweries}/>
              </Header>
              <Header as="h3">
                <Phone id={id} phone={phone} fetchBreweries={this.props.fetchBreweries}/> {phone.slice(0,3)}-{phone.slice(3,6)}-{phone.slice(6,10)}
              </Header>
              <Header as="h3">Address: <br />
                <Street id={id} street={street} fetchBreweries={this.props.fetchBreweries}/>  <br />
                <City id={id} city={city} fetchBreweries={this.props.fetchBreweries}/>,
                <Country id={id} country={country} fetchBreweries={this.props.fetchBreweries}/>, <PostalCode id={id} postal={postal} fetchBreweries={this.props.fetchBreweries}/>
              </Header>
              <Header as="h3">
                <WebsiteURL id={id} website_url={website_url} fetchBreweries={this.props.fetchBreweries}/><a href={website_url} target="_blank">{website_url}</a></Header>
              <Button color="black">Delete</Button>
            </Container>
          </Grid.Column>
          <Grid.Column width={5}>
            <div style={{ height: '25vh', width: '100%' }}>
              <GoogleMapReact
                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom}>
                <AnyReactComponent
                  lat={latitude}
                  lng={longitude}
                  text="My Marker"/>
              </GoogleMapReact>
            </div>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default BackBreweryCard
