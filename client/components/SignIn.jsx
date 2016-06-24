import React from 'react'

export default (props) => {
    return (
      <div>
        <h1>Sign In</h1>

        <ul>
          {props.teamMembers.map((teamMember) => {
            return <a href="" onClick={() => {
                    props.signIn
                })}><li> {teamMember.name}</li></a>
          })}
        </ul>

        <input type="text" placeholder="Name" />
        <button type="submit" onClick={() => {
                props.signUp
            }}>Sign Up</button>
        <button type="submit" onClick="">Cancel</button>
      </div>
    )
}


// props.teamMembers[0].name
