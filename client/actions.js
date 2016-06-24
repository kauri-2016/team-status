export const GO_HOME = 'GO_HOME'
export const UPDATE_STATUS = 'UPDATE_STATUS'

export function goHome() {
  return {
    type: GO_HOME
  }
}


export function updateStatus(teamMemberId, statusMessage) {
  return {
    type: UPDATE_STATUS,
    teamMemberId: teamMemberId,
    statusMessage: statusMessage
  }

}
