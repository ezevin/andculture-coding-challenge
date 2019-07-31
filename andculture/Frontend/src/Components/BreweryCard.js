import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import { Card, Grid } from 'semantic-ui-react'
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
          <Grid.Column width={8}>
            <Card>
                  Brewery Type: {type} <br />
                  Phone Number: {phone} <br />
                  Address: {street} <br />
                  {city}, {country}, {postal}<br />
                  Webpage: <a href={url}>{url}</a>
            </Card>
          </Grid.Column>
          <Grid.Column width={8}>
            <div style={{ height: '50vh', width: '100%' }}>
          <GoogleMapReact
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            <AnyReactComponent
              lat={latitude}
              lng={longitude}
              text="My Marker"
            />
          </GoogleMapReact>
        </div>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default BreweryCard
