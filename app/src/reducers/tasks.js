import { SET_TASKS, SET_PLAN } from '../constants'
import { append } from 'ramda'
export const tasks = (state = [], action) => {
  switch (action.type) {
    case SET_TASKS:
      return action.payload
    default:
      return state
  }
}

export const programs = (state = [], action) => {
  switch (action.type) {
    case SET_PLAN:
      return action.payload
    default:
      return state
  }
}
