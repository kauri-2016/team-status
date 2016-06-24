import test from 'ava'
import {
  UPDATE_STATUS
} from '../client/actions'
import reducer from '../client/reducer'

test('updateStatus updates existing status message', (t) => {
  const testState = {
    currentTeamMemberId: 1,
    teamMembers: [{
      id: 1,
      name: 'Joe'
    }, {
      id: 2,
      name: 'Jane'
    }],
    statuses: [{
      teamMember: {
        id: 1,
        name: 'Joe',
      },
      message: 'yeah ok Joe'
    }, {
      teamMember: {
        id: 2,
        name: 'Jane',
      },
      message: 'yeah ok Jane'
    }]
  }

  const expectedState = {
    currentTeamMemberId: 1,
    teamMembers: [{
      id: 1,
      name: 'Joe'
    }, {
      id: 2,
      name: 'Jane'
    }],
    statuses: [{
      teamMember: {
        id: 1,
        name: 'Joe',
      },
      message: 'new message from Joe'
    }, {
      teamMember: {
        id: 2,
        name: 'Jane',
      },
      message: 'yeah ok Jane'
    }]
  }

  const action = {
    type: UPDATE_STATUS,
    teamMemberId: 1,
    statusMessage: 'new message from Joe'
  }

  const state = reducer(testState, action)

  t.deepEqual(state, expectedState)
})

test('updateStatus creates first status message', (t) => {
  const testState = {
    currentTeamMemberId: 1,
    teamMembers: [{
      id: 1,
      name: 'Joe'
    }, {
      id: 2,
      name: 'Jane'
    }],
    statuses: [{
      teamMember: {
        id: 2,
        name: 'Jane'
      },
      message: 'yeah ok Jane'
    }]
  }

  const expectedState = {
    currentTeamMemberId: 1,
    teamMembers: [{
      id: 1,
      name: 'Joe'
    }, {
      id: 2,
      name: 'Jane'
    }],
    statuses: [{
      teamMember: {
        id: 2,
        name: 'Jane'
      },
      message: 'yeah ok Jane'
    }, {
      teamMember: {
        id: 1,
        name: 'Joe'
      },
      message: 'new message from Joe'
    }]
  }

  const action = {
    type: UPDATE_STATUS,
    teamMemberId: 1,
    statusMessage: 'new message from Joe'
  }

  const state = reducer(testState, action)

  t.deepEqual(state, expectedState)
})
