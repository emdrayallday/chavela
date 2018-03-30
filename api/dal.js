const { allDocs, getDoc, addDoc } = require('./lib/dal-help')

const getTasks = options => allDocs(options || { include_docs: true })
const getTask = id => getDoc(id)
const getResources = options => allDocs(options || { include_docs: true })
const getResource = id => getDoc(id)
const addGoal = goal => addDoc(goal)
module.exports = {
  getTasks,
  getResources,
  getResource,
  getTask,
  addGoal
}
