const { allDocs, getDoc } = require('./lib/dal-help')

const getTasks = options => allDocs(options || { include_docs: true })
const getTask = id => getDoc(id)
const getResources = options => allDocs(options || { include_docs: true })
const getResource = id => getDoc(id)

module.exports = {
  getTasks,
  getResources,
  getResource,
  getTask
}
