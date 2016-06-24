import React from 'react'

import BoardContainer from '../containers/BoardContainer'
import SignInContainer from '../containers/SignInContainer'

export default React.createClass({
  render () {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
})
