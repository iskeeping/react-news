import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import {HashRouter as Router} from 'react-router-dom'
import dataCenter from './store/reducers'
import App from './app'
import vConsole from 'vconsole'
import * as serviceWorker from './serviceWorker'

new vConsole()

const store = createStore(dataCenter)
render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
