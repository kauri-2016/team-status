import { SHOW_LANDING_PAGE } from './actions'

const INITIAL_STATE = {
  currentTeamMemberId: 3,
  teamMembers: [ {
    id: 2,
    name: 'Jane'
  } ],
  statuses: [ {
    teamMember: {
      id: 2,
      name: 'Jane',
    },
    message: 'yeah ok'
  }]
}



export default (state = INITIAL_STATE, action) => {
  return state
}
