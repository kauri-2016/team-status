import React from "react"


export default (props) => {
  return (
    <div>
      <ul>
        {props.statuses.map((status) => {
          return (
            <li key={status.teamMember.id}>
              {status.teamMember.name} {' '}
              {status.message}
            </li>
          )
        })}
      </ul>
    </div>

  )
}
