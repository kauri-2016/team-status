export const GO_HOME = 'GO_HOME'
export const UPDATE_STATUS = 'UPDATE_STATUS'
export const SIGN_IN = 'SIGN_IN'
export const SIGN_UP = 'SIGN_UP'

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

  export function signIn(id) {
    return {
      type: SIGN_IN,
      id: id
    }
  }

  export function signUp(name) {
    return {
      type: SIGN_UP,
      teamMemberName: name
    }
  }
