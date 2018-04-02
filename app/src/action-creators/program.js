import fetch from 'isomorphic-fetch'
import { SET_TASKS } from '../constants'
const url = 'http://localhost:5000'
const slug = require('slugify')
const uuidv4 = require('uuid/v4')
export const getTasks = async (dispatch, getState) => {
  const tasks = await fetch(`${url}/tasks`).then(res => res.json())
  dispatch({ type: SET_TASKS, payload: tasks })
}

export const addGoal = (history, goal) => async (dispatch, getState) => {
  goal.type = 'user'
  goal._id = `${goal.type}_${slug(goal.userName, {
    lower: true
  })}_${uuidv4()}`
  console.log(goal)
  const method = 'POST'
  const body = JSON.stringify(goal)
  const headers = { 'Content-Type': 'application/json' }
  await fetch(`${url}/program`, { method, body, headers }).then(res =>
    res.json()
  )
  history.push('/program')
}
