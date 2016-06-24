import React from "react"


export default (props) => (
  <div>
    <a href="#">close</a>
    <ul>
      {props.statuses.map((status) =>(
          <li key={status.teamMember.id}>
            {status.teamMember.name} {' '}
            {status.message}
          </li>
        )
      )}
    </ul>
  </div>
)
