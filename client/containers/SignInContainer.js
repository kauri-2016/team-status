import {
  connect
} from 'react-redux'

import SignIn from '../components/SignIn'
import {} from '../actions'

const mapStateToProps = (state) => {
  return {
    teamMembers: state.teamMembers
  }

}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

const SignInContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn)

export default SignInContainer
