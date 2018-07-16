
import React from 'react'

class NameBox extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      firstName: '',
      lastName: '',
    }
  }

  // onFirstNameChange = (event) => {
  //   this.setState({firstName: event.target.value})
  // }

  // onLastNameChange = (event) => {
  //   this.setState({lastName: event.target.value})
  // }

  onInputChange = (event) => {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value
    })
  }

  render() {
    const { firstName, lastName } = this.state
    return (
      <div>
        <input placeholder='FirstName'
               name='firstName'
               onChange={this.onInputChange}/>
        <input placeholder='LastName'
               name='lastName'
               onChange={this.onInputChange}/>
        <p>{firstName.toUpperCase()} - {lastName.toUpperCase()}</p>
      </div>
    )
  }
}

export default NameBox
