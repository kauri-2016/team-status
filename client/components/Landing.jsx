import React from 'react'
import { Link } from 'react-router'

export default (props) => {
  return (
  <div>
    <div className="u-full-width main-container">
      <h1 className="heading">Team Status</h1>
        <div className="view-board">
          <Link to="board">View Board</Link>
        </div>
        <div className="get-status">
          <Link to={props.currentTeamMemberId ? "updatestatus" : "signin"}>Update Status</Link>
        </div>
    </div>
  </div>
)}
