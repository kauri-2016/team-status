import { connect } from 'react-redux'

import UpdateStatus from '../components/UpdateStatus'
import { goHome, updateStatus } from '../actions'

const mapStateToProps = (state) => {
  return {
    teamMemberId: state.currentTeamMemberId,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    goHome: () => dispatch(goHome()),
    updateStatus: (teamMemberId, statusMessage) => dispatch(updateStatus(teamMemberId, statusMessage))
  }
}

const UpdateStatusContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdateStatus)

export default UpdateStatusContainer
