import React from 'react'

import './Counter.css'

export default class Counter extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      cnt: 5
    }
  }

  incCnt = () => {
    const newCnt = this.state.cnt + 1
    this.setState({cnt: newCnt})
  }

  decCnt = () => {
    this.setState(prevState => ({cnt: prevState.cnt-1}))
  }

  render() {
    return (
      <div className='Counter-container'>
        <button onClick={this.decCnt}>-</button>
        <strong>{this.state.cnt}</strong>
        <button onClick={this.incCnt}>+</button>
      </div>
    )
  }
}
