import { GO_HOME, UPDATE_STATUS } from './actions'
import { SIGN_IN, SIGN_UP } from './actions'

const INITIAL_STATE = {
  currentTeamMemberId: null,
  teamMembers: [{
    id: 1,
    name: 'Joe'
  }, {
    id: 2,
    name: 'Jane'
  }],
  statuses: [{
    teamMember: {
      id: 1,
      name: 'Rich'
    },
    message: 'This is a message from Rich'
  }, {
    teamMember: {
      id: 2,
      name: 'Jane'
    },
    message: 'This is a message from Jane'
  }]
}

export default (state = INITIAL_STATE , action) => {
  let newState = null
  switch (action.type) {
    case GO_HOME:
      return state

    case UPDATE_STATUS:
      newState = Object.assign({}, state)
      newState.statuses = []
      let found = false
      newState.statuses = state.statuses.map((status) => {
        if (status.teamMember.id === state.currentTeamMemberId) {
          status.message = action.statusMessage
          found = true
          return status
        }
        return status
      })
      if (!found) { // set first status message
        newState.statuses.push({
          teamMember: {
            id: action.teamMemberId,
            name: getTeamMemberName(action.teamMemberId, state.teamMembers)
          },
          message: action.statusMessage
        })
      }
      return newState

    case SIGN_IN:
      return Object.assign({}, state, {
        currentTeamMemberId: action.id
      })

    case SIGN_UP:
      newState = Object.assign({}, state)
      newState.teamMembers = state.teamMembers.slice()

      newState.teamMembers.push({
        id: state.teamMembers.length + 1,
        name: action.teamMemberName
      })
      return newState

    default:
      return state
  }
}

function getTeamMemberName (id, teamMembers) {
  const members = teamMembers.filter((member) => {
    return member.id === id
  })
  if (members.length === 1) {
    return members[0].name
  }
  throw new Error('Team member error')
}
