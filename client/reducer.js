const INITIAL_STATE = {
  currentTeamMemberId: null,
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
