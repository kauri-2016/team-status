import React from 'react'

export default (props) => (
  <div>
    <div className="u-full-width main-container">
      <h1 className="heading">Team Status</h1>
        <div className="view-board">
          <a className="button" href="#">View Board</a>
        </div>
        <div className="get-status">
          <a  className="button" href="#" onClick={() => { checkIfSignedIn(props.currentTeamMemberId) }}>Update Status</a>
        </div>
    </div>
  </div>
)

function checkIfSignedIn (id) {
  if (id === null) {
    console.log('sign in')
  } else {
    console.log('status');
  }
}
