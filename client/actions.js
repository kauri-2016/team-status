export const SIGN_IN = 'SIGN_IN'
export const SIGN_UP = 'SIGN_UP'

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
