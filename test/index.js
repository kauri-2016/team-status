import test from 'ava'
import React from 'react'
import { shallow } from 'enzyme'

import App from '../client/components/App'
import reducer from '../client/reducer'
import {signIn, signUp} from '../client/actions'


test('<App />', t => {
  const expected = 'Home'
  const wrapper = shallow(React.createElement(App))
  t.is(wrapper.find('h1').text(), expected)
}

test(t => {
  var before = {}
  var after = reducer(before, signIn(1))
  t.is(after.currentTeamMemberId, 1)
})

test(t => {
  var before
  var after = reducer(before, signUp("Dev the Dev"))
  t.is(after.teamMembers[3].name, "Dev the Dev")
})
