import React from 'react'
import BoardContainer from '../containers/BoardContainer'

export default React.createClass({
  render () {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
})
