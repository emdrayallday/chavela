import { createStore, combineReducers, applyMiddleware } from 'redux'
import { advisorWizard, stepNumber, form } from './reducers/wizard'

import thunk from 'redux-thunk'

const store = createStore(
  combineReducers({
    advisorWizard,
    stepNumber,
    form
  }),

  applyMiddleware(thunk)
)

export default store
