
import { connect } from 'react-redux'

import Board from '../components/Board'
import { showLandingPage } from '../actions'

const mapStateToProps = (state) => {
  return {
    statuses: state.statuses
  }
}

const BoardContainer = connect (
  mapStateToProps
)(Board)

export default BoardContainer
