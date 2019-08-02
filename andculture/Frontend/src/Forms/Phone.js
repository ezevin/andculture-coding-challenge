import React, { Component } from 'react';
import { Form, Button, Popup, Header } from 'semantic-ui-react'

class Phone extends Component {

  state = {
    phone: "",
    isOpen: false
  }

  componentDidMount() {
    this.setState({phone: this.props.phone})
  }

  handleOpen = () => {
    this.setState({isOpen: true})
  }

  handleClose = () => {
    this.setState({isOpen: false})
  }

  handleChange = (e) => {
    this.setState({phone: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const { phone } = this.state

    fetch(`http://localhost:3000/breweries/${this.props.id}`, {
          method: "PATCH",
          headers: {
            Accept: 'application/json',
            'Content-type': 'application/json'
          },
          body: JSON.stringify({ phone })
        })
        .then(res=>res.json())
        .then(data => {this.setState(data)})
        .then(()=> this.props.fetchBreweries())
        this.setState({isOpen: false})
  }
  render(){
    const value = this.state.phone

    const form = <Form onSubmit={this.handleSubmit}>
                  <Form.Field>
                    <label>Change Phone:</label>
                    <input value={value} onChange={this.handleChange}/>
                  </Form.Field>
                  <Button type='submit'>Submit</Button>
                </Form>

    return (
      <Popup
        content={form}
        trigger={<span>Phone Number:</span>}
        on='click'
        position='top center'
        open={this.state.isOpen}
        onOpen={this.handleOpen}
        onClose={this.handleClose}
            />

    )
  }
}

export default Phone
