import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Counter from './Counter'
import NameBox from './NameBox'
import MovieList from './MovieList'

// class Hello extends Component {
//   constructor(props) {
//     super(props)
//     console.log(props)
//   }

//   render() {
//     const { familyName, name } = this.props

//     return (
//       <h1>Hello {familyName} {name}</h1>
//     )
//   }
// }

// const Hello = (props) => <h1>Hello {props.name}</h1>

// function Hello(props) {
//   return <h1>Hello {props.familyName}</h1>
// }

const Hello = ({familyName, name}) => <h1>{familyName} {name}</h1>

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showNameBox: true
    }
  }

  render() {
    return (
      <div>
        <Hello name='ekohe2000' familyName='react'/>
        <Counter cnt={5}/>

        {
          this.state.showNameBox &&
          <NameBox/>
        }

        <MovieList/>
      </div>
    )
  }
}

export default App;
