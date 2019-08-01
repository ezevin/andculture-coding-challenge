import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import { Container, Grid, Header } from 'semantic-ui-react'
// import { withRouter } from 'react-router-dom'
// import Map from './Map'

// API_KEY = bootstrapURLKeys
const AnyReactComponent = ({ text }) => <div>{text}</div>

class BreweryCard extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  }

  render (){
    // console.log(this.props);
    const { type, phone, street, city, country, postal, url, latitude, longitude} = this.props
    return (
      <div>
        <Grid>
          <Grid.Column width={11}>
            <Container className="info">
              <Header as="h3">Brewery Type: {type}</Header>
              <Header as="h3">Phone Number: {phone.slice(0,3)}-{phone.slice(3,6)}-{phone.slice(6,10)} </Header>
              <Header as="h3">Address: <br />
                {street}  <br />
                {city}, {country}, {postal}
              </Header>
              <Header as="h3">Webpage: <a href={url}>{url}</a></Header>
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

export default BreweryCard
