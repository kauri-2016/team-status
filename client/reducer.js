import {
  SIGN_IN,
  SIGN_UP
} from './actions'

const INITIAL_STATE = {
  currentTeamMember: {},

  statuses: [{
    teamMember: {
      id: 1,
      name: 'Rich'
    },
    status: "This is a status"
  }, {
    teamMember: {
      id: 2,
      name: "teamMember 2"
    },
    status: "This is a status number 2"
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
        currentTeamMember: action.id
      })
    case SIGN_UP:
      return Object.assign({}, state, {

      })
    default:

  }
  return state
}
