import React, { Component } from 'react';
import { Accordion, Icon, Header } from 'semantic-ui-react'
// import { withRouter } from 'react-router-dom'

import BreweryCard from '../Components/BreweryCard'

class Breweries extends Component {
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
    // console.log(this.state);
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
          <BreweryCard type={this.props.type} city={this.props.city} country={this.props.country} latitude={this.props.latitude} longitude={this.props.longitude} phone={this.props.phone} postal={this.props.postal} street={this.props.street} url={this.props.url}/>
        </Accordion.Content>
      </Accordion>
    );
  }
}

export default Breweries
