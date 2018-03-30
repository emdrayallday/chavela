const { getTasks } = require('../dal')

module.exports = app => {
  app.get('/tasks', (req, res) => {
    getTasks({
      include_docs: true,
      startkey: 'task_',
      endkey: 'task_\ufff0'
    }).then(result => res.send(result))
  })
}
