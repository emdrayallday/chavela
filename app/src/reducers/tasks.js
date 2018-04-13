import { SET_TASKS, SET_PLAN, SET_PROGRAM, EDIT_PROGRAM } from '../constants'
import { merge } from 'ramda'
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

export const program = (state = [], action) => {
  switch (action.type) {
    case SET_PROGRAM:
      return action.payload
    case EDIT_PROGRAM:
      return merge(state, { program: action.payload })
    default:
      return state
  }
}
