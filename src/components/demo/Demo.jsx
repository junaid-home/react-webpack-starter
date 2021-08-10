import * as React from 'react'

import Logo from '../../../public/icon-512x512.png'
import './demo.css'

const Test = () => (
  <div className="container">
    <div className="img-container">
      <img className="img" src={Logo} alt="Webpack" />
    </div>
    <h5 className="text">Welcome back!</h5>
  </div>
)

export default Test
