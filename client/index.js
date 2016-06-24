import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducer from './reducers/landingReducer'

import App from './components/App'
import Landing from './containers/LandingContainer'

const store = createStore(reducer)

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Landing}/>
          <Route path="signin" component={Landing}/>
          <Route path="board" component={Landing}/>
          <Route path="updatestatus" component={Landing}/>
        </Route>
      </Router>
    </Provider>,
    document.getElementById('app')
  )
})
