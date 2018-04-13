import fetch from 'isomorphic-fetch'
import { find } from 'ramda'
import { SET_TASKS, SET_PLAN, SET_PROGRAM } from '../constants'
const url = 'http://localhost:5000'
const slug = require('slugify')
const uuidv4 = require('uuid/v4')
export const getTasks = async (dispatch, getState) => {
  const tasks = await fetch(`${url}/tasks`).then(res => res.json())
  dispatch({ type: SET_TASKS, payload: tasks })
}

export const getPrograms = async (dispatch, getState) => {
  const plan = await fetch(`${url}/programs`).then(res => res.json())
  dispatch({ type: SET_PLAN, payload: plan })
}

export const addGoal = (history, goal) => async (dispatch, getState) => {
  goal.type = 'user'
  goal._id = `${goal.type}_${slug(goal.userName, {
    lower: true
  })}_${uuidv4()}`
  const method = 'POST'
  const body = JSON.stringify(goal)
  const headers = { 'Content-Type': 'application/json' }
  await fetch(`${url}/programs`, { method, body, headers }).then(res =>
    res.json()
  )
  const state = getState()
  const programs = state.programs
  const program =
    goal.time === 3
      ? find(p => p.time === 3, programs)
      : goal.time === 6
        ? find(p => p.time === 6, programs)
        : find(p => p.time === 12, programs)
  dispatch({ type: SET_PROGRAM, payload: program })
  history.push(`/program/${goal._id}`)
}
