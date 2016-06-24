import {
  GO_HOME,
  UPDATE_STATUS
} from './actions'

const INITIAL_STATE = {
  currentTeamMemberId: 1,
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
      name: 'Joe',
    },
    message: 'yeah ok Joe'
  }, {
    teamMember: {
      id: 2,
      name: 'Jane',
    },
    message: 'yeah ok Jane'
  }]
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GO_HOME:
      return state
    case UPDATE_STATUS:
      const newState = Object.assign({}, state)
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
    default:
      return state
  }

}

function getTeamMemberName(id, teamMembers) {
  const members = teamMembers.filter((member) => {
    return member.id === id
  })
  if (members.length === 1) {
    return members[0].name
  }
  throw new Error("Team member error")
}

export default reducer
