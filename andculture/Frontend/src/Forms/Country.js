import React, { Component } from 'react';
import { Form, Button, Popup } from 'semantic-ui-react'

class Country extends Component {

  state = {
    country: "",
    isOpen: false
  }

  componentDidMount() {
    this.setState({country: this.props.country})
  }

  handleOpen = () => {
    this.setState({isOpen: true})
  }

  handleClose = () => {
    this.setState({isOpen: false})
  }

  handleChange = (e) => {
    this.setState({country: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const { country } = this.state

    fetch(`http://localhost:3000/breweries/${this.props.id}`, {
          method: "PATCH",
          headers: {
            Accept: 'application/json',
            'Content-type': 'application/json'
          },
          body: JSON.stringify({ country })
        })
        .then(res=>res.json())
        .then(data => {this.setState(data)})
        .then(()=> this.props.fetchBreweries())
        this.setState({isOpen: false})
  }
  render(){
    const value = this.state.country

    const form = <Form onSubmit={this.handleSubmit}>
                  <Form.Field>
                    <label>Change Country:</label>
                    <input value={value} onChange={this.handleChange}/>
                  </Form.Field>
                  <Button type='submit'>Submit</Button>
                </Form>

    return (
      <Popup
        content={form}
        trigger={<span className="pointer">{this.props.country}</span>}
        on='click'
        position='top center'
        open={this.state.isOpen}
        onOpen={this.handleOpen}
        onClose={this.handleClose}
            />

    )
  }
}

export default Country
