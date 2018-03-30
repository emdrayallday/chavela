import { SET_TASKS } from '../constants'

export const tasks = (state = [], action) => {
  switch (action.type) {
    case SET_TASKS:
      return action.payload
    default:
      return state
  }
}
