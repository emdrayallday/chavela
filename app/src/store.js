import { createStore, combineReducers, applyMiddleware } from 'redux'
import { advisorWizard, stepNumber, form } from './reducers/wizard'
import { tasks } from './reducers/tasks'
import { resources } from './reducers/resources'
import thunk from 'redux-thunk'

const store = createStore(
  combineReducers({
    advisorWizard,
    stepNumber,
    form,
    tasks,
    resources
  }),

  applyMiddleware(thunk)
)

export default store
