const { addGoal } = require('../dal')

module.exports = app => {
  app.post('/program', (req, res) => {
    console.log('req body', req.body)
    addGoal(req.body).then(result => res.send(result))
  })
}
