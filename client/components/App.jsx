import React from 'react'
import { Link } from 'react-router'

import BoardContainer from '../containers/BoardContainer'
import SignInContainer from '../containers/SignInContainer'

export default React.createClass({
  render () {
    return (
      <div className="container">
        <div className="nav">
          <Link to="/"><button>Home</button></Link>
        </div>
        <div className="main">
          {this.props.children}
        </div>
      </div>
    )
  }
})
