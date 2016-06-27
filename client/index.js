import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';

import App from './components/App'
import reducer from './reducer'
import Landing from './containers/LandingContainer'
import Board from './containers/BoardContainer'
import UpdateStatus from './containers/UpdateStatusContainer'
import SignIn from './containers/SignInContainer'

let store = createStore(
  reducer, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Landing} />
          <Route path="signin" component={SignIn} />
          <Route path="board" component={Board} />
          <Route path="updatestatus" component={UpdateStatus} />
        </Route>
      </Router>
    </Provider>,
    document.getElementById('app')
  )
})
