import { connect } from 'react-redux'
import Landing from '../components/Landing'

const mapStateToProps = (state) => {
  return {
    currentTeamMember: state.currentTeamMember
  }
}
