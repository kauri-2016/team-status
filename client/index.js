import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router'

import App from './components/App'
import Landing from './components/Landing'


document.addEventListener('DOMContentLoaded', () => {
  render(
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Landing}/>
      </Route>
    </Router>,
    document.getElementById('app')
  )
})
