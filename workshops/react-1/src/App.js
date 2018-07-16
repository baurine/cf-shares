import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Counter from './Counter';

// function Hello(props) {
//   return <h1>Hello {props.name}</h1>
// }

// const Hello = ({props}) => (
//   <h1>Hello {props.name}</h1>
// )

const Hello = ({name}) => (
  <h1>Hello {name}</h1>
)

// class Hello extends Component {
//   render() {
//     return <h1>Hello {this.props.name}</h1>
//   }
// }

class App extends Component {
  render() {
    return (
      <div>
        <Hello name='ekohe'/>
        <Counter/>
      </div>
    );
  }
}

export default App;
