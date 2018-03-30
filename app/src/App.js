import React, { Component } from 'react'
import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/home'
import Resources from './pages/resources'
import Success from './pages/success'
import Wizard from './pages/wizard'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/resources" component={Resources} />
            <Route exact path="/success-stories" component={Success} />
            <Route exact path="/wizard" component={Wizard} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
