import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import './index.css'
import 'semantic-ui-css/semantic.min.css'
import App from './App'
import { getTasks } from './action-creators/program'
import { getResources } from './action-creators/resources'
import registerServiceWorker from './registerServiceWorker'
import store from './store'
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()

store.dispatch(getTasks)
store.dispatch(getResources)
