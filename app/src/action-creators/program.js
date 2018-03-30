import fetch from 'isomorphic-fetch'
import { SET_TASKS } from '../constants'
const url = 'http://localhost:5000'

export const getTasks = async (dispatch, getState) => {
  const tasks = await fetch(`${url}/tasks`).then(res => res.json())
  dispatch({ type: SET_TASKS, payload: tasks })
}

export const addGoal = (history, goal) => async (dispatch, getState) => {
  const method = 'POST'
  const body = JSON.stringify(goal)
  const headers = { 'Content-Type': 'application/json' }
  await fetch(`${url}/program`, { method, body, headers }).then(res =>
    res.json()
  )
  history.push('/')
}
