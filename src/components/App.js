import React, { Component } from 'react';
import '../styles/base.css'
import { Provider } from 'react-redux'
import store from '../store'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Daily from './daily'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="app">
            <div className="title">
              <h1>Nova's Weather App</h1>
            </div>
            <Route exact path="/" component={Daily} />
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App;
