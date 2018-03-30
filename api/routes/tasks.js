const { getTasks, getTask } = require('../dal')

module.exports = app => {
  app.get('/tasks', (req, res) => {
    getTasks({
      include_docs: true,
      startkey: 'task_',
      endkey: 'task_\ufff0'
    }).then(result => res.send(result))
  })
  app.get('/tasks/:id', (req, res) => {
    getTask(req.params.id).then(result => res.send(result))
  })
}
