import React from 'react'

class Counter extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      cnt: 10
    }
  }

  decCnt = () => {
    // let { cnt } = this.state
    // this.setState({cnt: cnt-1})
    this.setState( prev => ({cnt: prev.cnt-1}))
  }

  incCnt = () => {
    let newCnt = this.state.cnt
    newCnt = newCnt + 1
    this.setState({cnt: newCnt})
  }

  render () {
    const { cnt } = this.state
    return (
      <div>
        <button onClick={this.decCnt}>-</button>
        <span>{cnt}</span>
        <button onClick={this.incCnt}>+</button>
      </div>
    )
  }
}

export default Counter
