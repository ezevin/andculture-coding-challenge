import React, { Component } from 'react';
import { Accordion, Icon, Header } from 'semantic-ui-react'

import BackBreweryCard from '../Components/BackBreweryCard'

class BackBreweries extends Component {
  state = {
    activeIndex: 0
  }

  handleClick = (e, titleProps) => {
   const { index } = titleProps
   const { activeIndex } = this.state
   const newIndex = activeIndex === index ? -1 : index

   this.setState({ activeIndex: newIndex })
 }

  render (){

    const { name } = this.props
    const { activeIndex } = this.state
    return (
      <Accordion fluid styled>
        <Accordion.Title active={activeIndex === 1} index={1} onClick={this.handleClick}>
          <Header as="h2">
            <Icon name='beer' color="brown"/>
            {name}
          </Header>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
          <BackBreweryCard deleteBreweries={this.props.deleteBreweries} fetchBreweries={this.props.fetchBreweries} brewery_type={this.props.brewery_type} city={this.props.city} country={this.props.country} latitude={this.props.latitude} longitude={this.props.longitude} phone={this.props.phone} postal={this.props.postal} street={this.props.street} website_url={this.props.website_url}
          name={this.props.name}
          id={this.props.id}/>
        </Accordion.Content>
      </Accordion>
    );
  }
}

export default BackBreweries
