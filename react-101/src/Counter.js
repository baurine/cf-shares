import React from 'react'

import './Counter.css'

export default class Counter extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      cnt: 0
    }
  }

  render() {
    return (
      <div className='Counter-container'>
        <button>-</button>
        <strong>{this.state.cnt}</strong>
        <button>+</button>
      </div>
    )
  }
}
