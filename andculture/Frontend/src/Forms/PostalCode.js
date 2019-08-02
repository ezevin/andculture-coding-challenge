import React, { Component } from 'react';
import { Form, Button, Popup } from 'semantic-ui-react'

class PostalCode extends Component {

  state = {
    postal: "",
    isOpen: false
  }

  componentDidMount() {
    this.setState({postal: this.props.postal})
  }

  handleOpen = () => {
    this.setState({isOpen: true})
  }

  handleClose = () => {
    this.setState({isOpen: false})
  }

  handleChange = (e) => {
    this.setState({postal: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const { postal } = this.state

    fetch(`http://localhost:3000/breweries/${this.props.id}`, {
          method: "PATCH",
          headers: {
            Accept: 'application/json',
            'Content-type': 'application/json'
          },
          body: JSON.stringify({ postal })
        })
        .then(res=>res.json())
        .then(data => {this.setState(data)})
        .then(()=> this.props.fetchBreweries())
        this.setState({isOpen: false})
  }
  render(){
    const value = this.state.postal

    const form = <Form onSubmit={this.handleSubmit}>
                  <Form.Field>
                    <label>Change PostalCode:</label>
                    <input value={value} onChange={this.handleChange}/>
                  </Form.Field>
                  <Button type='submit'>Submit</Button>
                </Form>

    return (
      <Popup
        content={form}
        trigger={<span className="pointer">{this.props.postal}</span>}
        on='click'
        position='top center'
        open={this.state.isOpen}
        onOpen={this.handleOpen}
        onClose={this.handleClose}
            />

    )
  }
}

export default PostalCode
