import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

import Home from './pages/Home'
import Comments from './pages/Comments'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => (<Redirect to="/home" />)} />  
        <Route exact component={Home} path='/home' />
        <Route exact component={Comments} path='/comments' />
      </Switch>
    </Router>
  )
}

export default App
