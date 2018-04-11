const { addGoal, getProgram, getPrograms } = require('../dal')

module.exports = app => {
  app.post('/programs', (req, res) => {
    addGoal(req.body).then(result => res.send(result))
  })
  app.get('/programs/:id', (req, res) => {
    getProgram(req.params.id).then(p => res.send(p))
  })
  app.get('/programs', (req, res) => {
    getPrograms({
      include_docs: true,
      startkey: 'program_',
      endkey: 'program_\ufff0'
    }).then(p => res.send(p))
  })
}
