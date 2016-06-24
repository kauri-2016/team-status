
import { connect } from 'react-redux'

import Board from '../components/Board'


const mapStateToProps = (state) => {
  return {
    statuses: state.statuses
  }
}

const BoardContainer = connect (
  mapStateToProps
)(Board)

export default BoardContainer
