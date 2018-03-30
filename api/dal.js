const { allDocs } = require('./lib/dal-help')

const getTasks = options => allDocs(options || { include_docs: true })

module.exports = {
  getTasks
}
