import {
  SIGN_IN,
  SIGN_UP
} from './actions'

const INITIAL_STATE = {
  currentTeamMemberId: null,

  statuses: [{
    teamMember: {
      id: 1,
      name: 'Rich'
    },
    message: "This is a message"
  }, {
    teamMember: {
      id: 2,
      name: "teamMember 2"
    },
    message: "This is a message number 2"
  }],

  teamMembers: [{
    id: 1,
    name: 'Rich'
  }, {
    id: 2,
    name: 'Wonaca'
  }, {
    id: 3,
    name: 'Steve'
  }, ]
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
      return Object.assign({}, state, {
        currentTeamMemberId: action.id
      })

    case SIGN_UP:

      const newState = Object.assign({}, state)
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
