import { connect } from 'react-redux'

import SignIn from '../components/SignIn'
import { signIn, signUp } from '../actions'

const mapStateToProps = (state) => {
  return {
    teamMembers: state.teamMembers
  }

}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: id => dispatch(signIn(id)),
    signUp: name => dispatch(signUp(name))
  }
}

const SignInContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn)

export default SignInContainer
