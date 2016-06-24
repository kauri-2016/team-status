import test from 'ava'

import { SHOW_LANDING_PAGE } from '../client/actions'
import reducer from '../client/reducer'

test('Initial state meets expectations', t => {
  const action = { type: '@@INIT' }
  const state = reducer(undefined, action)
  t.is(state.selectedThing, null)
  t.is(state.things.length, 1)
})
