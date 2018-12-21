import React from 'react'

const MyLayout = ({ children }) =>
  <div
    style={{
      width: '100vw',
      height: '100vw',
      backgroundColor: 'tomato',
      textAlign: 'left',
      paddingTop: '100px',
      paddingLeft: '100px'
    }}>
    <img src='./ekohe-logo.png'></img>
    {children}
  </div>

export default MyLayout
