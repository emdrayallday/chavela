import fetch from 'isomorphic-fetch'
import { SET_RESOURCES } from '../constants'
const url = 'http://localhost:5000'

export const getResources = async (dispatch, getState) => {
  const resources = await fetch(`${url}/resources`).then(res => res.json())
  console.log(resources)
  dispatch({ type: SET_RESOURCES, payload: resources })
}
