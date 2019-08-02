import React, { Component } from 'react';
import { Form, Button, Popup, Header } from 'semantic-ui-react'

class BreweryType extends Component {

  state = {
    brewery_type: "",
    isOpen: false
  }

  componentDidMount() {
    this.setState({brewery_type: this.props.brewery_type})
  }

  handleOpen = () => {
    this.setState({isOpen: true})
  }

  handleClose = () => {
    this.setState({isOpen: false})
  }

  handleChange = (e) => {
    this.setState({brewery_type: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const { brewery_type } = this.state

    fetch(`http://localhost:3000/breweries/${this.props.id}`, {
          method: "PATCH",
          headers: {
            Accept: 'application/json',
            'Content-type': 'application/json'
          },
          body: JSON.stringify({ brewery_type })
        })
        .then(res=>res.json())
        .then(data => {this.setState(data)})
        .then(()=> this.props.fetchBreweries())
        this.setState({isOpen: false})
  }
  render(){
    const value = this.state.brewery_type

    const form = <Form onSubmit={this.handleSubmit}>
                  <Form.Field>
                    <label>Change BreweryType:</label>
                    <input value={value} onChange={this.handleChange}/>
                  </Form.Field>
                  <Button type='submit'>Submit</Button>
                </Form>

    return (
      <Popup
        content={form}
        trigger={<span className="pointer"> {this.props.brewery_type}</span>}
        on='click'
        position='bottom center'
        open={this.state.isOpen}
        onOpen={this.handleOpen}
        onClose={this.handleClose}
            />

    )
  }
}

export default BreweryType
