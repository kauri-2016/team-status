import React from 'react'

export default (props) => {
  return (
    <div className='update-status' >
      <h1>New Status</h1>
      <input type='text'/>
      <button onClick={props.goHome}>Cancel</button>
      <button onClick={props.updateStatus}>Update status</button>
    </div>
  )
}
