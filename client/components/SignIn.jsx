import React from 'react'
import {Link} from 'react-router'

export default (props) => {
    let textInput
    return (
      <div>
        <h1>Sign In</h1>

        <ul>
          {props.teamMembers.map((teamMember) => {
            return <a key={teamMember.id} href="#" onClick={() => {
            props.signIn(teamMember.id)
            }}><li> {teamMember.name}</li></a>
          })}
        </ul>

        <form onSubmit= {e => {
            e.preventDefault()
            if (textInput.value.trim()) {
              let name = textInput.value
              props.signUp(name)
          }}}>
             <input ref={input => { textInput = input } } />
             <button type='submit'>Sign Up</button>
             <Link to={"/"}><button>Cancel</button></Link>
         </form>
      </div>
    )
}


// props.teamMembers[0].name
