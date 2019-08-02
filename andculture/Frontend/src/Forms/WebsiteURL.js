import React, { Component } from 'react';
import { Form, Button, Popup } from 'semantic-ui-react'

class WebsiteURL extends Component {

  state = {
    website_url: "",
    isOpen: false
  }

  componentDidMount() {
    this.setState({website_url: this.props.website_url})
  }

  handleOpen = () => {
    this.setState({isOpen: true})
  }

  handleClose = () => {
    this.setState({isOpen: false})
  }

  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({website_url: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const { website_url } = this.state

    fetch(`http://localhost:3000/breweries/${this.props.id}`, {
          method: "PATCH",
          headers: {
            Accept: 'application/json',
            'Content-type': 'application/json'
          },
          body: JSON.stringify({ website_url })
        })
        .then(res=>res.json())
        .then(data => {this.setState(data)})
        .then(()=> this.props.fetchBreweries())
        this.setState({isOpen: false})
  }
  render(){

    const value = this.state.website_url

    const form = <Form onSubmit={this.handleSubmit}>
                  <Form.Field>
                    <label>Change WebsiteURL:</label>
                    <input value={value} onChange={this.handleChange}/>
                  </Form.Field>
                  <Button type='submit'>Submit</Button>
                </Form>

    return (
      <Popup
        content={form}
        trigger={<span className="pointer">WebsiteURL:</span>}
        on='click'
        position='top center'
        open={this.state.isOpen}
        onOpen={this.handleOpen}
        onClose={this.handleClose}
            />

    )
  }
}

export default WebsiteURL
