const { addGoal } = require('../dal')
const slug = require('slugify')
const uuidv4 = require('uuid/v4')
module.exports = app => {
  app.post('/program', (req, res) => {
    req.body._id = `${slug(req.body.userName, { lower: true })}_${uuidv4()}`
    addGoal(req.body).then(result => res.send(result))
  })
}
