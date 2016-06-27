import React from 'react'
import {Link} from 'react-router'

export default (props) => {
  let inputText = null
  return (
    <div className='update-status' >
      <h1>New Status</h1>
      <input type='text' ref={(node) => { inputText = node } }/>
      <Link to={"/"}><button>Cancel</button></Link>
      <button onClick={() => {
        props.updateStatus(inputText.value)
        props.history.push("board")
      }}>Update status</button>
    </div>
  )
}
