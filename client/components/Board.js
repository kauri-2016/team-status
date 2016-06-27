import React from "react"


export default (props) => (
  <div>
    <a href="#">close</a>
    <ul>
      {props.statuses.map((status, i) =>(
          <li key={i}>
            {status.teamMember.name} {' '}
            {status.message}
          </li>
        )
      )}
    </ul>
  </div>
)
