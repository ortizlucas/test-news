import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import Home from './pages/Home'
import Comments from './pages/Comments'

const App = () => {
  return (
    <Router>
      <Switch>
        {/* <Redirect path="/" to="/home" /> */}
        <Route exact component={Home} path='/' />
        <Route exact component={Comments} path='/comments' />
      </Switch>
    </Router>
  )
}

export default App
