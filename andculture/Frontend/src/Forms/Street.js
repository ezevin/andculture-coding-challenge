import React, { Component } from 'react';
import { Form, Button, Popup, Header } from 'semantic-ui-react'

class Street extends Component {

  state = {
    street: "",
    isOpen: false
  }

  componentDidMount() {
    this.setState({street: this.props.street})
  }

  handleOpen = () => {
    this.setState({isOpen: true})
  }

  handleClose = () => {
    this.setState({isOpen: false})
  }

  handleChange = (e) => {
    this.setState({street: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const { street } = this.state

    fetch(`http://localhost:3000/breweries/${this.props.id}`, {
          method: "PATCH",
          headers: {
            Accept: 'application/json',
            'Content-type': 'application/json'
          },
          body: JSON.stringify({ street })
        })
        .then(res=>res.json())
        .then(data => {this.setState(data)})
        .then(()=> this.props.fetchBreweries())
        this.setState({isOpen: false})
  }
  render(){
    const value = this.state.street

    const form = <Form onSubmit={this.handleSubmit}>
                  <Form.Field>
                    <label>Change Street:</label>
                    <input value={value} onChange={this.handleChange}/>
                  </Form.Field>
                  <Button type='submit'>Submit</Button>
                </Form>

    return (
      <Popup
        content={form}
        trigger={<span className="pointer"  inverted color='grey'>{this.props.street}</span>}
        on='click'
        position='top center'
        open={this.state.isOpen}
        onOpen={this.handleOpen}
        onClose={this.handleClose}
            />

    )
  }
}

export default Street
